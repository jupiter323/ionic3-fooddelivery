import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { MyApp } from './app.component';
import { OnboardingPage } from '../pages/onboarding/onboarding';
import { GloabalProvider } from '../providers/gloabal/gloabal';
import { LoginPage } from '../pages/login/login';
import { Geolocation } from '@ionic-native/geolocation';
import { AddressPage } from '../pages/address/address';
import { TabsPage } from '../pages/tabs/tabs';
import { RestaurantPage } from '../pages/restaurant/restaurant';
import { DishdetailPage } from '../pages/restaurant/dishdetail/dishdetail';
import { ShipinginfoPage } from '../pages/tabs/carttab/shipinginfo/shipinginfo';
import { CheckoutaddnewcardPage } from '../pages/tabs/carttab/checkoutaddnewcard/checkoutaddnewcard';
import { CheckoutconfirmPage } from '../pages/tabs/carttab/checkoutconfirm/checkoutconfirm';
import { CheckoutselectPage } from '../pages/tabs/carttab/checkoutselect/checkoutselect';
import { ChangenamePage } from '../pages/tabs/profiletab/changename/changename';
import { ChangeaddressPage } from '../pages/tabs/profiletab/changeaddress/changeaddress';
import { ChangelanguagePage } from '../pages/tabs/profiletab/changelanguage/changelanguage';
import { ChangenumberPage } from '../pages/tabs/profiletab/changenumber/changenumber';
import { ChangepasswordPage } from '../pages/tabs/profiletab/changepassword/changepassword';
import { ManagepaymentPage } from '../pages/tabs/profiletab/managepayment/managepayment';
import { PrivacypolicyPage } from '../pages/tabs/profiletab/privacypolicy/privacypolicy';
import { TermsofservicePage } from '../pages/tabs/profiletab/termsofservice/termsofservice';
import { AddressaddeditPage } from '../pages/addressaddedit/addressaddedit';
import { ZiancashPage } from '../pages/tabs/profiletab/managepayment/ziancash/ziancash';
import { AddfavoritePage } from '../pages/tabs/favoritetab/addfavorite/addfavorite';
import { DeletefavoritePage } from '../pages/tabs/favoritetab/deletefavorite/deletefavorite';
import { EditfavoritePage } from '../pages/tabs/favoritetab/editfavorite/editfavorite';
import { RestaurantfilterPage } from '../pages/restaurantfilter/restaurantfilter';
import { ReorderbreakdownPage } from '../pages/tabs/recordertab/reorderbreakdown/reorderbreakdown';
import { NotificationsPage } from '../pages/notifications/notifications';
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    OnboardingPage,
    LoginPage,
    AddressPage,
    TabsPage,
    RestaurantPage,
    DishdetailPage,
    ShipinginfoPage,
    CheckoutconfirmPage,
    CheckoutaddnewcardPage,
    CheckoutselectPage,
    ChangenamePage,
    ChangeaddressPage,
    ChangelanguagePage,
    ChangenumberPage,
    ChangepasswordPage,
    ManagepaymentPage,
    PrivacypolicyPage,
    TermsofservicePage,
    AddressaddeditPage,
    ZiancashPage,
    AddfavoritePage,
    DeletefavoritePage,
    EditfavoritePage,
    RestaurantfilterPage,
    ReorderbreakdownPage,
    NotificationsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OnboardingPage,
    LoginPage,
    AddressPage,
    TabsPage,
    RestaurantPage,
    DishdetailPage,
    ShipinginfoPage,
    CheckoutconfirmPage,
    CheckoutaddnewcardPage,
    CheckoutselectPage,
    ChangenamePage,
    ChangeaddressPage,
    ChangelanguagePage,
    ChangenumberPage,
    ChangepasswordPage,
    ManagepaymentPage,
    PrivacypolicyPage,
    TermsofservicePage,
    AddressaddeditPage,
    ZiancashPage,
    AddfavoritePage,
    DeletefavoritePage,
    EditfavoritePage,
    RestaurantfilterPage,
    ReorderbreakdownPage,
    NotificationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GloabalProvider
  ]
})
export class AppModule { }
