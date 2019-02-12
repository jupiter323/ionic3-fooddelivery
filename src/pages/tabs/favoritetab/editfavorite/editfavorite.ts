import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GloabalProvider } from '../../../../providers/gloabal/gloabal';
import { RestaurantPage } from '../../../restaurant/restaurant';
import { DeletefavoritePage } from '../deletefavorite/deletefavorite';
import { AddfavoritePage } from '../addfavorite/addfavorite';

/**
 * Generated class for the EditfavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editfavorite',
  templateUrl: 'editfavorite.html',
})
export class EditfavoritePage {

  expandedHeader: boolean = false;
  addressList = ["Address 1", "Address 2", "Address 3", "Address 4", "Address 5"];
  selectedAddressIndex = 0;
  restaurantsList = [
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using " },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding1.png", logo: "assets/imgs/logo2.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using " },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo3.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using " },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using " }
  ];
  offScreens = ["assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png"]
  offSlide: boolean = false;
  orderStatus: boolean = false;
  constructor(
    private gs: GloabalProvider,
    public navCtrl: NavController) {

  }

  expandHeader() {
    this.expandedHeader = !this.expandedHeader;
  }

  goRestaurant(index) {
    this.gs.setTabBarHiddentStatus(true);
    this.navCtrl.push(RestaurantPage, { restaurant: this.restaurantsList[index] });
  }
  deleteFavorite() {
    this.navCtrl.push(DeletefavoritePage);
  }
  addFavorite() {
    this.navCtrl.push(AddfavoritePage);
  }

}
