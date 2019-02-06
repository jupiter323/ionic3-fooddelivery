import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarttabPage } from './carttab';

@NgModule({
  declarations: [
    CarttabPage,
  ],
  imports: [
    IonicPageModule.forChild(CarttabPage),
  ],
})
export class CarttabPageModule {}
