import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GloabalProvider } from '../../providers/gloabal/gloabal';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  hometabRoot = 'HometabPage'
  favoritetabRoot = 'FavoritetabPage'
  carttabRoot = 'CarttabPage'
  recordertabRoot = 'RecordertabPage'
  profiletabRoot = 'ProfiletabPage'


  constructor(public navCtrl: NavController, private gs: GloabalProvider) {

  }

}
