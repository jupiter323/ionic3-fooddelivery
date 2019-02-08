import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CheckoutselectPage } from '../checkoutselect/checkoutselect';

/**
 * Generated class for the CheckoutconfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkoutconfirm',
  templateUrl: 'checkoutconfirm.html',
})
export class CheckoutconfirmPage {

  constructor(
    private altCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutconfirmPage');
  }
  goSelectCard() {
    this.navCtrl.push(CheckoutselectPage);
  }
  order() {
    let alert = this.altCtrl.create({
      title: 'Success',
      message: '"Your order is being processed. We’ll send a notification when your order delivered."',
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
  }


}
