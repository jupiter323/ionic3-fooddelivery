import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CheckoutaddnewcardPage } from '../checkoutaddnewcard/checkoutaddnewcard';

/**
 * Generated class for the CheckoutselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkoutselect',
  templateUrl: 'checkoutselect.html',
})
export class CheckoutselectPage {

  cardList: Array<{ name: string, selected: boolean, endnum: number, address: string }> = [
    { name: "Ahmad", selected: true, endnum: 8765, address: "Office 2501, JBC 2, Cluster V" },
    { name: "Ahmad", selected: false, endnum: 8765, address: "Office 2501, JBC 2, Cluster V" }
  ]
  constructor(
    private altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutselectPage');
  }
  selectedCard(index) {
    this.cardList = this.cardList.map((x, i) => {
      if (i == index) x.selected = true;
      else x.selected = false;
      return x;
    })
  }
  order() {
    let alert = this.altCtrl.create({
      title: 'Success',
      message: 'Your order is being processed. We’ll send a notification when your order delivered.',
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
  addNewCard() {
    this.navCtrl.push(CheckoutaddnewcardPage)
  }

}
