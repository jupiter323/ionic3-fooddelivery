import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutconfirmPage } from '../checkoutconfirm/checkoutconfirm';

/**
 * Generated class for the ShipinginfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shipinginfo',
  templateUrl: 'shipinginfo.html',
})
export class ShipinginfoPage {

  isASAPDelivery: boolean = true;
  paymentSelected: number = 0;
  today
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.today = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShipinginfoPage');
  }
  selectSchedule() {
    this.isASAPDelivery = false;

  }
  goCheckoutConfirm() {
    this.navCtrl.push(CheckoutconfirmPage);
  }

}
