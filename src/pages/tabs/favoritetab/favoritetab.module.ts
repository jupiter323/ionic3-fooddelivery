import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritetabPage } from './favoritetab';

@NgModule({
  declarations: [
    FavoritetabPage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritetabPage),
  ],
})
export class FavoritetabPageModule {}
