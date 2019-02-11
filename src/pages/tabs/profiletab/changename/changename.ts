import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ChangenamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changename',
  templateUrl: 'changename.html',
})
export class ChangenamePage {

  name: string
  constructor(
    private altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangenamePage');
  }
  save() {
    let alert = this.altCtrl.create({
      title: 'Success',
      message: 'Your name has been changed successfully',
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
