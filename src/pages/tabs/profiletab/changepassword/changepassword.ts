import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  password
  showPassword:boolean = false;
  constructor(
    private altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
  save() {
    let alert = this.altCtrl.create({
      title: 'Success',
      message: 'Your password has been changed successfully',
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


