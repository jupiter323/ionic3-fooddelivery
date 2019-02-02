import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  currentLatLang: any = {};
  constructor(
    public geoCtl: Geolocation,
    public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.getCurrentPositionAndLoadMap();


  }
  getCurrentPositionAndLoadMap() {
    this.geoCtl.getCurrentPosition().then((resp) => {
      this.currentLatLang.myLat = resp.coords.latitude;
      this.currentLatLang.myLong = resp.coords.longitude;
      console.log(this.currentLatLang);
      this.loadMap();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMap() {
    let latLng = new google.maps.LatLng(this.currentLatLang.myLat, this.currentLatLang.myLong);
    console.log(latLng)
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();
  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      icon: "assets/imgs/marker.png"
      
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}
