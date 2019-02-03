import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;
@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {

  constructor(
    public geoCtl: Geolocation,
    public navCtrl: NavController) {

  }

  @ViewChild('map') mapElement: ElementRef;
  registeredStats: boolean = false;

  map: any;
  latLng: any;
  isKM: any = 10000;
  isType: any = "city_hall";
  addressInfo: { city: string, area: string, additional: string, title: string } = { city: "", area: "", additional: "", title: "" }
  cities = [];
  areas = [];

  selectedCuisine = [false, false, false, false, false, false];

  addressList: Array<{ city: string, area: string, titles: Array<{ title: string, additional: string, selected: boolean }>, icon: string, showDetails: boolean }> = [];

  async ionViewDidLoad() {
    await this.getCurrentPosition();
    await this.loadMap();
    this.addCurrentMarker();
    this.nearbyPlace();
    this.initAddressList();
  }
  // add address control
  initAddressList() {
    var additional = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis ';
    for (let i = 0; i < 4; i++) {
      this.addressList.push({
        city: "city",
        area: "address" + i,
        titles: [{ title: "Title" + i, selected: true, additional: additional }, { title: "Title" + i, selected: false, additional: additional }],
        icon: 'ios-arrow-down',
        showDetails: false
      });
    }
  }
  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'ios-arrow-down';
    } else {
      data.showDetails = true;
      data.icon = 'ios-arrow-up';
    }
  }
  pressedTitle(addressIndex, titleIndex) {
    this.addressList[addressIndex].titles = this.addressList[addressIndex].titles.map((x, i) => {
      var xx = x;
      if (i == titleIndex) {
        xx.selected = true;
        return xx;
      } else {
        xx.selected = false;
        return xx;
      }
    })
  }
  // page control
  pressedDone() {
    if (this.registeredStats)
      this.navCtrl.setRoot(HomePage);
    else
      this.registeredStats = true;
  }
  // cuisine control
  selected(selectedIndex) {
    this.selectedCuisine[selectedIndex] = !this.selectedCuisine[selectedIndex];
    if (selectedIndex == 0 && this.selectedCuisine[0]) this.selectedCuisine = this.selectedCuisine.map((x) => true);
    if (selectedIndex != 0 && !this.selectedCuisine[selectedIndex]) this.selectedCuisine[0] = false;
  }
  // map control start
  async getCurrentPosition() {
    var curentPos = await this.geoCtl.getCurrentPosition();
    this.latLng = await new google.maps.LatLng(curentPos.coords.latitude, curentPos.coords.longitude);
  }

  async loadMap() {
    let mapOptions = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = await new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  addCurrentMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      icon: "assets/icon/marker.png"

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

  nearbyPlace() {
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: this.latLng,
      radius: this.isKM,
      types: [this.isType]
    }, (results, status) => {
      this.callback(results, status);
    });
  }
  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      var splitedCities = [];
      var splitedAreas = [];
      for (var i = 0; i < results.length; i++) {
        // this.addMarker(results[i]);
        splitedCities.push(results[i]["vicinity"].split(',')[1]);
        splitedAreas.push(results[i]["vicinity"].split(',')[0]);
      }
      this.cities = splitedCities.filter((v, i) => splitedCities.indexOf(v) === i);//remove duplicated member
      this.areas = splitedAreas.filter((v, i) => splitedAreas.indexOf(v) === i);
    }
  }
  // map control end
}
