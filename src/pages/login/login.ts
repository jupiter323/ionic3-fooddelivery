import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginFormData: Object = { verify: [] };
  public isFacebook: boolean = false;
  public pageStatus: String = "login"
  constructor(
    public altCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  logForm() {
    this.navCtrl.push(HomePage);
    let alert = this.altCtrl.create({
      title: 'Error',
      message: 'Mobile number or password is wrong ',
      buttons: [
        {
          text: 'OK',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }
  signForm() {
    this.pageStatusHandle('phoneverify');
  }

  pageStatusHandle(status: String) {
    if (status === 'facebook')
      this.isFacebook = true;
    this.pageStatus = status;
  }
  doneSignUp() {

    let alert = this.altCtrl.create({
      title: 'Success',
      message: `Sign up  ${this.isFacebook ? 'with facebook' : ''} successfully completed`,
      buttons: [
        {
          text: 'OK',
          handler: data => {
          }
        }
      ]
    });
    alert.present();
  }

}
