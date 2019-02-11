import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ChangenumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changenumber',
  templateUrl: 'changenumber.html',
})
export class ChangenumberPage {
  number
  formData: any = { verify: [] }
  isPhonverify = false;
  constructor(
    private altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangenumberPage');
  }
  saveNewnumber() {
    this.isPhonverify = true;
  }
  done() {
    let alert = this.altCtrl.create({
      title: 'Success',
      message: 'Your mobile number has been changed successfully',
      buttons: [
        {
          text: 'Ok',
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
