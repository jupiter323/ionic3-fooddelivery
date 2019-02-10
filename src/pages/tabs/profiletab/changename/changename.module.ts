import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangenamePage } from './changename';

@NgModule({
  declarations: [
    ChangenamePage,
  ],
  imports: [
    IonicPageModule.forChild(ChangenamePage),
  ],
})
export class ChangenamePageModule {}
