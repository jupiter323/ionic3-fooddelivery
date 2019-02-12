import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChangenamePage } from './changename/changename';
import { ChangenumberPage } from './changenumber/changenumber';
import { ChangepasswordPage } from './changepassword/changepassword';
import { ChangelanguagePage } from './changelanguage/changelanguage';
import { ChangeaddressPage } from './changeaddress/changeaddress';
import { PrivacypolicyPage } from './privacypolicy/privacypolicy';
import { TermsofservicePage } from './termsofservice/termsofservice';
import { LoginPage } from '../../login/login';
import { ManagepaymentPage } from './managepayment/managepayment';
import { NotificationsPage } from '../../notifications/notifications';

/**
 * Generated class for the ProfiletabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiletab',
  templateUrl: 'profiletab.html',
})
export class ProfiletabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfiletabPage');
  }
  goChangeName() {
    this.navCtrl.push(ChangenamePage);
  }
  goChangeNumber() {
    this.navCtrl.push(ChangenumberPage);
  }
  goChangePassword() {
    this.navCtrl.push(ChangepasswordPage);
  }
  goChangeLanguage() {
    this.navCtrl.push(ChangelanguagePage);
  }
  goChangeAddress() {
    this.navCtrl.push(ChangeaddressPage);
  }
  goManagePayment() {
    this.navCtrl.push(ManagepaymentPage);
  }
  goPrivacyPolicy() {
    this.navCtrl.push(PrivacypolicyPage);
  }
  goTermsOfService() {
    this.navCtrl.push(TermsofservicePage);
  }
  logOut() {
    this.navCtrl.setRoot(LoginPage);
  }
  notification() {
    this.navCtrl.push(NotificationsPage);
  }


}
