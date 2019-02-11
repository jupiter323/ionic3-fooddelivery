import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZiancashPage } from './ziancash';

@NgModule({
  declarations: [
    ZiancashPage,
  ],
  imports: [
    IonicPageModule.forChild(ZiancashPage),
  ],
})
export class ZiancashPageModule {}
