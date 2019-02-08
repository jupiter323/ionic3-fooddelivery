import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CheckoutaddnewcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkoutaddnewcard',
  templateUrl: 'checkoutaddnewcard.html',
})
export class CheckoutaddnewcardPage {
  formData = {}
  constructor(
    private altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutaddnewcardPage');
  }
  saveCard() {
    let alert = this.altCtrl.create({
      // title: 'Success',
      message: 'Do you want to save Credit Card information for later ?',
      buttons: [
        {
          text: 'No',
          handler: data => {
            return;
          }
        },
        {
          text: 'Yes',
          handler: data => {
            //save
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
