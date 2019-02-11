import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutselectPage } from '../../carttab/checkoutselect/checkoutselect';
import { ZiancashPage } from './ziancash/ziancash';

/**
 * Generated class for the ManagepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-managepayment',
  templateUrl: 'managepayment.html',
})
export class ManagepaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagepaymentPage');
  }
  goSelectCreditCard() {
    this.navCtrl.push(CheckoutselectPage);
  }
  goZainCash() {
    this.navCtrl.push(ZiancashPage);

  }

}
