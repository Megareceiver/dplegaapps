import { Component } from '@angular/core';
import { App, NavController, LoadingController, ToastController, ModalController } from 'ionic-angular';

import { DashboardPage } from '../dashboard/dashboard';
import { KelembagaanPage } from '../kelembagaan/kelembagaan';
import { PrestasiPage } from '../prestasi/prestasi';
import { KoleksiPage } from '../koleksi/koleksi';
import { NewsPage } from '../news/news';
import { AboutPage } from '../about/about';
import { SettingPage } from '../setting/setting';
import { FormKelembagaanPage } from '../form/form';

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
  userLevel = "";
  
  constructor(public app: App, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public appCtrl: App, public navCtrl: NavController, public modalCtrl: ModalController) {
    this.userLevel = localStorage.getItem('userLevel');

    // set our app's pages
    if (this.userLevel != '2' && this.userLevel != '1'){
      this.pages = [
        { title: 'Rekapitulasi', component: DashboardPage, icon: 'stats', color: 'main' },
        { title: 'Kelembagaan', component: KelembagaanPage, icon: 'people', color: 'vibrant' },
        { title: 'Prestasi', component: PrestasiPage, icon: 'trophy', color: 'bright' },
        { title: 'Koleksi', component: KoleksiPage, icon: 'book', color: 'secondary' },
        { title: 'Berita', component: NewsPage, icon: 'paper', color: 'primary' },
      ];
    } else if (this.userLevel == '2'){
      this.pages = [
        { title: 'Lembaga baru', component: FormKelembagaanPage, icon: 'add', color: 'main' },
        { title: 'Kelembagaan', component: KelembagaanPage, icon: 'people', color: 'vibrant' },
        { title: 'Prestasi', component: PrestasiPage, icon: 'trophy', color: 'bright' },
        { title: 'Koleksi', component: KoleksiPage, icon: 'book', color: 'secondary' },
      ];
    }

    this.other = [
      { title: 'Pengaturan', component: SettingPage, icon: 'settings', color: '' },
      { title: 'Tentang Aplikasi', component: AboutPage, icon: 'ios-information-circle-outline', color: 'primary' },
    ];
  }

  logout() {
    this.showLoader();
    this.authService.logout();
    this.appCtrl.getRootNav().push(LoginPage);
    this.loading.dismiss();
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
    // Let's navigate from TabsPage to Page
    
    if (pages.icon == "add"){
      let modal = this.modalCtrl.create(pages.component);
      modal.present();
    }else{
      this.navCtrl.push(pages.component);
    }
  }
}
