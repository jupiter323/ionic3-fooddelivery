import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GloabalProvider } from '../../../../providers/gloabal/gloabal';

/**
 * Generated class for the ChangelanguagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changelanguage',
  templateUrl: 'changelanguage.html',
})
export class ChangelanguagePage {

  constructor(
    public gs:GloabalProvider,
    private altCtrl:AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangelanguagePage');
  }
  save() {
    let alert = this.altCtrl.create({
      title: 'Success',
      message: 'Language has been changed successfully',
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
