import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShipinginfoPage } from './shipinginfo/shipinginfo';

/**
 * Generated class for the CarttabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carttab',
  templateUrl: 'carttab.html',
})
export class CarttabPage {

  odrderList: Array<{ restaurant: { img: string, name: string }, dishes: Array<{ img: string, name: string, detail: string, ordernumber: number, jod1: number, jod2: number, selected: boolean, cartcount: number }> }> = [
    {
      restaurant: { img: "assets/imgs/logo1.png", name: "Salt Restaurant" },
      dishes: [
        { img: "assets/imgs/dish1.png", name: "Sandwich name", detail: "Drinks(drink 1), Cheese(Cheddar Cheese)", ordernumber: 1, jod1: 5.00, jod2: 5.00, selected: false, cartcount: 1 },
        { img: "assets/imgs/dish1.png", name: "Sandwich name", detail: "Drinks(drink 1), Cheese(Cheddar Cheese)", ordernumber: 1, jod1: 5.00, jod2: 5.00, selected: false, cartcount: 1 },
      ]
    },
    {
      restaurant: { img: "assets/imgs/logo2.png", name: "KFC Restaurant" },
      dishes: [
        { img: "assets/imgs/dish1.png", name: "Sandwich name", detail: "Drinks(drink 1), Cheese(Cheddar Cheese)", ordernumber: 1, jod1: 5.00, jod2: 5.00, selected: false, cartcount: 1 }
      ]
    }
  ]
  isDeleteStatus: boolean = false;
  formData: { coupon: string } = { coupon: '' };
  couponValidated: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarttabPage');
  }
  deleteOrders() {
    this.isDeleteStatus = false;
    this.odrderList = this.odrderList.map((x, i) => {
      x.dishes = x.dishes.filter((xx, ii) => !xx.selected);
      return x;
    });
  }
  addCart(restaurantIndex, dishIndex) {
    this.odrderList[restaurantIndex].dishes[dishIndex].cartcount++;
  }
  removeCart(restaurantIndex, dishIndex) {
    if (--this.odrderList[restaurantIndex].dishes[dishIndex].cartcount < 0)
      this.odrderList[restaurantIndex].dishes[dishIndex].cartcount = 0;
  }
  removeDish(restaurantIndex, dishIndex) {
    this.odrderList[restaurantIndex].dishes[dishIndex].selected = true;
    this.deleteOrders();
  }
  validateCoupon() {
    if (this.formData.coupon.length == 4) this.couponValidated = true;
    else
      this.couponValidated = false;
  }
  next() {
    alert
    this.navCtrl.push(ShipinginfoPage);

  }

}
