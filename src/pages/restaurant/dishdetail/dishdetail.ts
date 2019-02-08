import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage {

  cuisinDetail: Object
  dishList: Array<{ dishkind: string, titles: Array<{ title: string, jod: number, selected: boolean }>, icon: string, showDetails: boolean }> = [];
  cartCount = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cuisinDetail = navParams.data.cuisinDetail ? navParams.data.cuisinDetail : { img: "assets/imgs/dish1.png", kind: "Sandwich name", detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", jod: 5.00 };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
    this.initAddressList();
  }
  initAddressList() {
    for (let i = 0; i < 4; i++) {
      this.dishList.push({
        dishkind: "Drinks" + i,
        titles: [{ title: "Cheddar Cheese" + i, selected: false, jod: 1.00 }, { title: "Cheddar Cheese" + i, selected: false, jod: 1.00 }, { title: "Cheddar Cheese" + i, selected: false, jod: 1.00 }],
        icon: 'ios-arrow-down',
        showDetails: false
      });
    }
  }
  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'ios-arrow-down';
    } else {
      data.showDetails = true;
      data.icon = 'ios-arrow-up';
    }
  }

  pressedTitle(dishIndex, titleIndex) {
    this.dishList[dishIndex].titles[titleIndex].selected = !this.dishList[dishIndex].titles[titleIndex].selected;
  }
  removeCart() {
    if (--this.cartCount < 0) this.cartCount = 0
  }

  addCart() {
    this.cartCount++;
  }
}
