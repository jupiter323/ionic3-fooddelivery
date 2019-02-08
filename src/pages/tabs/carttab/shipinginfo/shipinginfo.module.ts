import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipinginfoPage } from './shipinginfo';

@NgModule({
  declarations: [
    ShipinginfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipinginfoPage),
  ],
})
export class ShipinginfoPageModule {}
