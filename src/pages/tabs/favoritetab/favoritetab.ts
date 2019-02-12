import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { RestaurantPage } from '../../restaurant/restaurant';
import { GloabalProvider } from '../../../providers/gloabal/gloabal';
import { EditfavoritePage } from './editfavorite/editfavorite';
import { NotificationsPage } from '../../notifications/notifications';

/**
 * Generated class for the FavoritetabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritetab',
  templateUrl: 'favoritetab.html',
})
export class FavoritetabPage {

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
  goEditFavorite() {
    this.navCtrl.push(EditfavoritePage);
  }
  notification() {
    this.navCtrl.push(NotificationsPage);
  }

}
