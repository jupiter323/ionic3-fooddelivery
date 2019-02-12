import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ModalController } from 'ionic-angular';
import { RestaurantfilterPage } from '../../pages/restaurantfilter/restaurantfilter';
/*
  Generated class for the GloabalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GloabalProvider {
  public isArabic: boolean = false;
  private isTabBarHidden: boolean = false;
  constructor(
    private modalCtl: ModalController,
    public translate: TranslateService) {
    console.log('Hello GloabalProvider Provider');
    translate.setDefaultLang('en');
  }
  // helpera
  filter() {
    var modalPage = this.modalCtl.create(RestaurantfilterPage);
    modalPage.onDidDismiss((data) => {
      console.log(data);
    })
    modalPage.present();
  }
  // control share value
  getCurrentLanguageArabic() {
    return this.isArabic;
  }
  setArabic(isArabic: boolean) {
    this.isArabic = isArabic;
    if (this.isArabic)
      this.translate.use('ar');
    else
      this.translate.use('en');
  }
  changeLanguage() {
    this.isArabic = !this.isArabic;
    if (this.isArabic)
      this.translate.use('ar');
    else
      this.translate.use('en');
  }

  setTabBarHiddentStatus(status: boolean) {
    this.isTabBarHidden = status;
  }
  getTabHiddenStatus() {
    return this.isTabBarHidden;
  }

}
