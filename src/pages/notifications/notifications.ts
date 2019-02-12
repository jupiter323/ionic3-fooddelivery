import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notifications = [
    { img: "assets/imgs/profile.png", title: "Your Order Status", subtitle: "Your Order is out for delivery", des: "Lorem ipsum dolor sit amet, consectetur" },
    { img: "assets/imgs/logo2.png", title: "KFC Restaurant", subtitle: "Check new offer from your fevorite list", des: "Lorem ipsum dolor sit amet, consectetur", favorite: true },
    { img: "assets/imgs/logo3.png", title: "Burger King Restaurant", subtitle: "Rate your experience with Burger King", des: "Lorem ipsum dolor sit amet, consectetur", rate: true },
    { img: "assets/imgs/logo4.png", title: "Your Order Status", subtitle: "Your Order is out for delivery", des: "Lorem ipsum dolor sit amet, consectetur", rate: true },
    { img: "assets/imgs/logo1.png", title: "Your Order Status", subtitle: "Your Order is out for delivery", des: "Lorem ipsum dolor sit amet, consectetur", rate: true },
    { img: "assets/imgs/logo2.png", title: "KFC Restaurant", subtitle: "Check new offer from your fevorite list", des: "Lorem ipsum dolor sit amet, consectetur" },
    { img: "assets/imgs/logo3.png", title: "Burger King Restaurant", subtitle: "Rate your experience with Burger King", des: "Lorem ipsum dolor sit amet, consectetur" },
    { img: "assets/imgs/logo4.png", title: "Your Order Status", subtitle: "Your Order is out for delivery", des: "Lorem ipsum dolor sit amet, consectetur" }

  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }
  goRestaurant() {
    this.navCtrl.push(RestaurantPage);
  }

}
