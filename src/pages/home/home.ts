import { Component } from '@angular/core';
import { App, NavController, LoadingController, ToastController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { KelembagaanPage } from '../kelembagaan/kelembagaan';
import { PrestasiPage } from '../prestasi/prestasi';
import { KoleksiPage } from '../koleksi/koleksi';
import { NewsPage } from '../news/news';
import { AboutPage } from '../about/about';
import { SettingPage } from '../setting/setting';

import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{ title: string, component: any, icon: string, color: string }>;
  other: Array<{ title: string, component: any, icon: string, color: string }>;
  loading: any;
  
  constructor(public app: App, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public appCtrl: App, public navCtrl: NavController) {

    // set our app's pages
    this.pages = [
      { title: 'Rekapitulasi', component: DashboardPage, icon: 'stats', color: 'main' },
      { title: 'Kelembagaan', component: KelembagaanPage, icon: 'people', color: 'vibrant' },
      { title: 'Prestasi', component: PrestasiPage, icon: 'trophy', color: 'bright' },
      { title: 'Koleksi', component: KoleksiPage, icon: 'book', color: 'secondary' },
      { title: 'Berita', component: NewsPage, icon: 'paper', color: 'primary' },
    ];

    this.other = [
      { title: 'Pengaturan', component: SettingPage, icon: 'settings', color: '' },
      { title: 'Tentang Aplikasi', component: AboutPage, icon: 'ios-information-circle-outline', color: 'primary' },
    ];
  }

  logout() {
    this.showLoader();
    this.loading.dismiss();
    this.appCtrl.getRootNav().push(LoginPage);
    // this.authService.logout().then((result) => {
    //   this.loading.dismiss();
    //   this.appCtrl.getRootNav().push(LoginPage);
    // }, (err) => {
    //   this.loading.dismiss();
    //   this.presentToast(err);
    // });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Logout...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  navigateTo(pages) {
    // Let's navigate from TabsPage to Page1
    this.navCtrl.push(pages.component);
  }
}
