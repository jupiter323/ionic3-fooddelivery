import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddfavoritePage } from './addfavorite';

@NgModule({
  declarations: [
    AddfavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(AddfavoritePage),
  ],
})
export class AddfavoritePageModule {}
