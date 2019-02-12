import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GloabalProvider } from '../../../../providers/gloabal/gloabal';
import { RestaurantfilterPage } from '../../../restaurantfilter/restaurantfilter';
/**
 * Generated class for the AddfavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addfavorite',
  templateUrl: 'addfavorite.html',
})
export class AddfavoritePage {
  addressList = ["Address 1", "Address 2", "Address 3", "Address 4", "Address 5"];
  selectedAddressIndex = 0;
  restaurantsList = [
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using ", selected: false },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding1.png", logo: "assets/imgs/logo2.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using ", selected: false },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo3.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using ", selected: false },
    { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using ", selected: false }
  ];
  offScreens = ["assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png", "assets/imgs/offimage.png"]
  offSlide: boolean = false;
  orderStatus: boolean = false;
  constructor(
    private modalCtl: ModalController,
    private gs: GloabalProvider,
    public navCtrl: NavController) {

  }


  filter() {
    var modalPage = this.modalCtl.create(RestaurantfilterPage);
    modalPage.onDidDismiss((data)=>{
      console.log(data);
    })
    modalPage.present();
  }


}
