import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';
import { PrestasiPage } from '../prestasi/prestasi';
import { KoleksiPage } from '../koleksi/koleksi';
import { KelembagaanPage } from '../kelembagaan/kelembagaan';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  pages: Array<{ title: string, component: any, icon: string, color: string }>;
  loading: any;
  koleksi:0; 
  prestasi:0;
  ajuan: 0;
  valid:0;
  que: number = 0;
  countSummary: any;
  countLembaga: any;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    // set our app's pages
    this.pages = [
      { title: 'Prestasi', component: PrestasiPage, icon: 'trophy', color: 'bright' },
      { title: 'Koleksi', component: KoleksiPage, icon: 'book', color: 'secondary' },
      { title: 'Kelembagaan', component: KelembagaanPage, icon: 'people', color: 'vibrant' },
    ];

    this.loadSummary();
  }

  navigateTo(index, reff = null) {
    if(index == 2){
      localStorage.setItem('kelembagaan-filter-ajuan', 'false');
      localStorage.setItem('kelembagaan-filter-valid', 'false'); 
      if (reff == 'ajuan') { localStorage.setItem('kelembagaan-filter-ajuan', ''); }
      else if (reff == 'valid') { localStorage.setItem('kelembagaan-filter-valid', ''); }
      else {
        localStorage.setItem('kelembagaan-filter-ajuan', '');
        localStorage.setItem('kelembagaan-filter-valid', ''); 
      }
    }
    this.navCtrl.push(this.pages[index].component);
  }

  loadSummary() {
    this.showLoader();

    this.authService.getList('count/summary/').then((result) => {
      this.countSummary = result;
      this.koleksi = this.countSummary.koleksi;
      this.prestasi = this.countSummary.prestasi;
      this.ajuan = this.countSummary.ajuan;
      this.valid = this.countSummary.valid;

      // next count
      this.authService.getList('count/lembaga/').then((result) => {
        this.countLembaga = result;
        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        return false;
      });
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Memuat data...'
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

  advanceNumber(number) {
      var abs;
      if (number !== void 0) {
        console.log(number);
        abs = Math.abs(number);
        if (abs >= Math.pow(10, 12)) {
          number = (number / Math.pow(10, 12)).toFixed(1) + "t";
        } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9)) {
          number = (number / Math.pow(10, 9)).toFixed(1) + "b";
        } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6)) {
          number = (number / Math.pow(10, 6)).toFixed(1) + "m";
        } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3)) {
          number = (number / Math.pow(10, 3)).toFixed(1) + "k";
        }
        return number;
      }
  };

  simpleNumber(number){
    if(number >= 1000){
      number = number / 1000;
      number = number.toFixed(1) + 'k';
    }
    return number;
  }

}
