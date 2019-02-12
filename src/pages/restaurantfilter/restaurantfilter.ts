import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RestaurantfilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantfilter',
  templateUrl: 'restaurantfilter.html',
})
export class RestaurantfilterPage {

  selectedCuisine = [false, false, false, false, false, false, false, false, false, false, false, false];
  cuisineCroupList = [["All", "Chinese", "Pizza", "Homemade", "Indian", "Arabic"], ["France", "Italy", "Korean", "Japanese", "American", "Cuba"]]
  isHighestToLowest:boolean = false;
  isLowestToHighest:boolean = false;
  isCash:boolean = false;
  isZainCash:boolean = false;
  isCreditCard:boolean = false;
  isAZ:boolean = false
  isZA:boolean = false
  isHighToLowRate:boolean = false;
  isLowToHighRate:boolean = false;
  isMostRecommended:boolean = false;

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantfilterPage');
  }
  public closeModal() {
    this.viewCtrl.dismiss("data");
  }
  selected(cuisineGroupIndex,cuisineIndex) {
    let selectedIndex = cuisineGroupIndex *6 +cuisineIndex;
    this.selectedCuisine[selectedIndex] = !this.selectedCuisine[selectedIndex];
    if (selectedIndex == 0 && this.selectedCuisine[0]) this.selectedCuisine = this.selectedCuisine.map((x) => true);
    if (selectedIndex != 0 && !this.selectedCuisine[selectedIndex]) this.selectedCuisine[0] = false;
  }

}
