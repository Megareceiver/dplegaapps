import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { KelembagaanPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanFilterPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanDetailPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanLegalitasPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanSejarahPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanKepengurusanPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanUsahaPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanPrestasiPage } from '../pages/kelembagaan/kelembagaan';
import { KelembagaanKoleksiPage } from '../pages/kelembagaan/kelembagaan';

import { VerificationPage } from '../pages/verification/verification';
import { RevisionPage } from '../pages/verification/verification';

import { PrestasiPage } from '../pages/prestasi/prestasi';
import { KoleksiPage } from '../pages/koleksi/koleksi';

import { NewsPage } from '../pages/news/news';
import { NewsDetailPage } from '../pages/news/news';
import { NewsFormPage } from '../pages/news/news';

import { InboxPage } from '../pages/inbox/inbox';
import { InboxDetailPage } from '../pages/inbox/inbox';

import { SearchPage } from '../pages/search/search';
import { SettingPage } from '../pages/setting/setting';
import { SettingAccountPage } from '../pages/setting/setting';
import { SettingChangePasswordPage } from '../pages/setting/setting';
import { SettingFormAccountPage } from '../pages/setting/setting';

import { FormPage } from '../pages/form/form';
import { FormKelembagaanPage } from '../pages/form/form';
import { FormLegalitasPage } from '../pages/form/form';
import { FormSejarahPage } from '../pages/form/form';
import { FormKepengurusanPage } from '../pages/form/form';
import { FormUsahaPage } from '../pages/form/form';
import { FormHirarkiPage } from '../pages/form/form';
import { FormPrestasiPage } from '../pages/form/form';
import { FormKoleksiPage } from '../pages/form/form';

import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { Base64 } from '@ionic-native/base64';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    HomePage,
    DashboardPage,

    KelembagaanPage,
    KelembagaanFilterPage,
    KelembagaanDetailPage,
    KelembagaanPrestasiPage,
    KelembagaanKoleksiPage,
    KelembagaanLegalitasPage,
    KelembagaanSejarahPage,
    KelembagaanKepengurusanPage,
    KelembagaanUsahaPage,

    VerificationPage,
    RevisionPage,
    
    PrestasiPage,
    KoleksiPage,

    NewsPage,
    NewsDetailPage,
    NewsFormPage,

    InboxPage,
    InboxDetailPage,

    SearchPage,
    SettingPage,
    SettingAccountPage,
    SettingChangePasswordPage,
    SettingFormAccountPage,
    
    FormPage,
    FormKelembagaanPage,
    FormLegalitasPage,
    FormSejarahPage,
    FormKepengurusanPage,
    FormUsahaPage,
    FormHirarkiPage,
    FormPrestasiPage,
    FormKoleksiPage,

    AboutPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    HomePage,
    DashboardPage,

    KelembagaanPage,
    KelembagaanFilterPage,
    KelembagaanDetailPage,
    KelembagaanPrestasiPage,
    KelembagaanKoleksiPage,
    KelembagaanLegalitasPage,
    KelembagaanSejarahPage,
    KelembagaanKepengurusanPage,
    KelembagaanUsahaPage,

    VerificationPage,
    RevisionPage,

    PrestasiPage,
    KoleksiPage,

    NewsPage,
    NewsDetailPage,
    NewsFormPage,

    InboxPage,
    InboxDetailPage,

    SearchPage,
    SettingPage,
    SettingAccountPage,
    SettingChangePasswordPage,
    SettingFormAccountPage,
    
    FormPage,
    FormKelembagaanPage,
    FormLegalitasPage,
    FormSejarahPage,
    FormKepengurusanPage,
    FormUsahaPage,
    FormHirarkiPage,
    FormPrestasiPage,
    FormKoleksiPage,

    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    File,
    Transfer,
    Camera,
    FilePath,
    Base64,
    Geolocation,
    LocationAccuracy
  ]
})
export class AppModule {}
