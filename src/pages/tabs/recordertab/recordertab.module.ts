import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecordertabPage } from './recordertab';

@NgModule({
  declarations: [
    RecordertabPage,
  ],
  imports: [
    IonicPageModule.forChild(RecordertabPage),
  ],
})
export class RecordertabPageModule {}
