import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfiletabPage } from './profiletab';

@NgModule({
  declarations: [
    ProfiletabPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfiletabPage),
  ],
})
export class ProfiletabPageModule {}
