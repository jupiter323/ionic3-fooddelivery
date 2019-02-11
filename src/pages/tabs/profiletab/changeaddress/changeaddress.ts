import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressaddeditPage } from '../../../addressaddedit/addressaddedit';

/**
 * Generated class for the ChangeaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changeaddress',
  templateUrl: 'changeaddress.html',
})
export class ChangeaddressPage {

  addressList = [
    {
      address: "Amman Address", list: [
        { title: "Address Title1", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis" },
        { title: "Address Title1", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis" }
      ]
    },
    {
      address: "Aqaba Address", list: [
        { title: "Address Title1", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis" },
        { title: "Address Title1", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis" }
      ]
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeaddressPage');
  }
  editAddress() {
    this.navCtrl.push(AddressaddeditPage, { isEditAddress: true, isAddNewAddress: false });
  }
  addAddress() {
    this.navCtrl.push(AddressaddeditPage, { isEditAddress: false, isAddNewAddress: true, addressList:this.addAddress });
  }

}
