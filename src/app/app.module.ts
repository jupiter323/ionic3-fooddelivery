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
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    MyApp,   
    OnboardingPage,
    LoginPage,
    AddressPage,
    TabsPage
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
    TabsPage
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
