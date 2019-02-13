import { Component } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { OnboardingPage } from '../pages/onboarding/onboarding';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = OnboardingPage;

  constructor(
    public translate: TranslateService,
    platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      statusBar.styleBlackTranslucent();
      splashScreen.hide();
      translate.onLangChange.subscribe((event: LangChangeEvent) => {
        if (event.lang == 'ar') {
          platform.setDir('rtl', true);
          platform.setDir('ltr', false);
        }
        else {
          platform.setDir('ltr', true);
          platform.setDir('rtl', false);
        }
      });
    });
  }

}

