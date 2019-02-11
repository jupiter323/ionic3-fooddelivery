import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the AddressaddeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-addressaddedit',
  templateUrl: 'addressaddedit.html',
})
export class AddressaddeditPage {


  @ViewChild('map') mapElement: ElementRef;
  isAddNewAddress: boolean = false;
  isEditAddress: boolean = false;

  map: any;
  latLng: any;
  isKM: any = 10000;
  isType: any = "city_hall";
  addressInfo: { city: string, area: string, additional: string, title: string } = { city: "", area: "", additional: "", title: "" }
  cities = ["Adam", "Bdavi", "Emirate"];
  areas = ["Cnad", "Liyad", "Cros"];
  selectedCity = "Adam"
  addressList: Array<{ city: string, area: string, titles: Array<{ title: string, additional: string, selected: boolean }>, icon: string, showDetails: boolean }> = [];

  constructor(
    private navPram:NavParams,
    public altCtrl: AlertController,
    public geoCtl: Geolocation,
    public navCtrl: NavController) {
      this.isAddNewAddress = this.navPram.data.isAddNewAddress;
      this.isEditAddress = this.navPram.data.isEditAddress;

  }

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

  saveAddAddress() {

    if (!this.addressInfo.city || !this.addressInfo.area || !this.addressInfo.title || !this.addressInfo.additional) {

      let alert = this.altCtrl.create({
        title: 'Error',
        message: '"Please enter correct info"',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              return;
            }
          }
        ]
      });
      alert.present();
    } else {
      this.addressList.push({
        city: this.addressInfo.city,
        area: this.addressInfo.area,
        titles: [{ title: this.addressInfo.title, selected: false, additional: this.addressInfo.additional }],
        icon: 'ios-arrow-down',
        showDetails: false
      });
      let alert = this.altCtrl.create({
        title: 'Success',
        message: `New Address "${this.addressInfo.title}" has been saved successfully`,
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.isAddNewAddress = false;
              this.addressInfo = { city: "", area: "", additional: "", title: "" }
            }
          }
        ]
      });
      alert.present();
    }

  }
  // page control
  pressedDone() {
    this.navCtrl.pop();
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

  async nearbyPlace() {
    let service = await new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: this.latLng,
      radius: this.isKM,
      types: [this.isType]
    }, (results, status) => {
      this.callback(results, status);
    });
  }
  callback(results, status) {
    if (results.length != 0) {
      this.cities = [];
      this.areas = []
    }
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
