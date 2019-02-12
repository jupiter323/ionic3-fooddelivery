import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GloabalProvider } from '../../../providers/gloabal/gloabal';
import { ReorderbreakdownPage } from './reorderbreakdown/reorderbreakdown';
import { NotificationsPage } from '../../notifications/notifications';

/**
 * Generated class for the RecordertabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recordertab',
  templateUrl: 'recordertab.html',
})
export class RecordertabPage {
  expandedHeader: boolean = false;
  addressList = ["Address 1", "Address 2", "Address 3", "Address 4", "Address 5"];
  selectedAddressIndex = 0;

  offScreens = ["assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png"]
  offSlide: boolean = false;
  orderStatus: boolean = false;

  ordersList = [
    { date: "11, Sep", jod: 5, des: "Lorem ipsum dolor sit amet, consectetur", restaurants: [{ name: "Salt", logo: "assets/imgs/logo1.png" }, { name: "KFC", logo: "assets/imgs/logo2.png" }] },
    { date: "11, Sep", jod: 5, des: "Lorem ipsum dolor sit amet, consectetur", priceadjustment: "There is a price adjustments", restaurants: [{ name: "Spago", logo: "assets/imgs/logo4.png" }] },
    { date: "11, Sep", jod: 5, des: "Lorem ipsum dolor sit amet, consectetur", restaurants: [{ name: "Salt", logo: "assets/imgs/logo1.png" }, { name: "Spago", logo: "assets/imgs/logo4.png" }, { name: "KFC", logo: "assets/imgs/logo2.png" }] },
    { date: "11, Sep", jod: 5, des: "Lorem ipsum dolor sit amet, consectetur", restaurants: [{ name: "Spago", logo: "assets/imgs/logo3.png" }, { name: "KFC", logo: "assets/imgs/logo2.png" }] },
    { date: "11, Sep", jod: 5, des: "Lorem ipsum dolor sit amet, consectetur", restaurants: [{ name: "Salt", logo: "assets/imgs/logo1.png" }, { name: "KFC", logo: "assets/imgs/logo2.png" }] },
  ];
  constructor(
    private gs: GloabalProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordertabPage');
  }

  expandHeader() {
    this.expandedHeader = !this.expandedHeader;
  }
  goReorder() {
    this.navCtrl.push(ReorderbreakdownPage);
  }
  notification() {
    this.navCtrl.push(NotificationsPage);
  }


}
