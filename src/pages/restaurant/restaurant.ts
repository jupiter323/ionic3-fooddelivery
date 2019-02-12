import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GloabalProvider } from '../../providers/gloabal/gloabal';
import { DishdetailPage } from './dishdetail/dishdetail';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
enum RESTAURANT_TAB {
  MENU_TAB,
  REVIEWS_TAB,
  ABOUT_TAB
}
@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  restaurantTab = RESTAURANT_TAB;
  restaurant: Object;
  selectedCuisine = 0;
  selectedTab = RESTAURANT_TAB.MENU_TAB;
  cuisinesList = [
    [
      { img: "assets/imgs/dish1.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish2.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish3.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish2.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish1.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish2.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish1.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 },
      { img: "assets/imgs/dish2.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 }
    ],
    [], [], []];

  reviewList = [
    { img: "assets/imgs/profile.png", name: "Herve", rate: 5, date: "Nov 15, 2015", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis, egestas ante ac," },
    { img: "", name: "Herve", rate: 4, date: "Nov 15, 2015", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet libero iaculis, egestas ante ac," },
  ]
  reviewBlank = { img: "", name: "Herve", rate: 0, date: "Nov 15, 2015", des: "" };
  constructor(
    private gs: GloabalProvider,
    public navCtrl: NavController, public navParams: NavParams) {
    this.restaurant = navParams.data.restaurant ? navParams.data.restaurant : { kind: "Fast Food", name: "Salt Restaurant & Bar", background: "assets/imgs/onboarding2.png", logo: "assets/imgs/logo1.png", distance: 3.00, time: 30, rate: 4.5, off: " off on order using " };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    this.reviewList.push(this.reviewBlank);
  }
  ionViewWillLeave() {
    this.gs.setTabBarHiddentStatus(false);
  }
  selected(selectedIndex) {
    this.selectedCuisine = selectedIndex;
  }
  goDish(cuisineIndex) {
    this.navCtrl.push(DishdetailPage, { cuisinDetail: this.cuisinesList[this.selectedCuisine][cuisineIndex] });

  }

}
