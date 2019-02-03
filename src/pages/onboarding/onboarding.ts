import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GloabalProvider } from '../../providers/gloabal/gloabal';
import { LoginPage } from '../login/login';

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html',
})
export class OnboardingPage {
  public boardIndex = 0;
  public boardTitle = "Expect the best";
  public boardDes = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis, egestas ante ac, fermentum quam. Integer vel augue at dolor facilisis convallis vitae ac nulla."
  public btnText = "Next"

  constructor(
    public gs:GloabalProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  onClickNext() {
    switch (++this.boardIndex) {
      case 1:
        this.boardTitle = "We are every where";
        break;
      case 2:
        this.btnText = "Let's Start";
        this.boardTitle = "We serve passion";
        break;
      default://index over 3
        this.boardIndex = 2;
        this.goLogin();
    }
  }

  goLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
