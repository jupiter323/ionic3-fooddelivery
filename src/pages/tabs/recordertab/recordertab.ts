import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GloabalProvider } from '../../../providers/gloabal/gloabal';

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
  constructor(
    private gs:GloabalProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordertabPage');
  }

  expandHeader() {
    this.expandedHeader = !this.expandedHeader;
  }

}
