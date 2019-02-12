import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestaurantfilterPage } from './restaurantfilter';

@NgModule({
  declarations: [
    RestaurantfilterPage,
  ],
  imports: [
    IonicPageModule.forChild(RestaurantfilterPage),
  ],
})
export class RestaurantfilterPageModule {}
