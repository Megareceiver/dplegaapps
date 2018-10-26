import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-prestasi',
  templateUrl: 'prestasi.html'
})
export class PrestasiPage {
  data: any;
  summary: any;
  loading: any;
  page = 1;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    // get initial data
    this.getData();
  }

  getData() {
    this.showLoader();
    this.authService.getListPage('prestasi', this.page).then((result) => {
      this.data = result;
      this.page = this.page + 1;
      
      
      this.authService.getSummary('prestasi').then((result) => {
        this.summary = result;
        this.summary = this.summary.summary;
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

  loadData(infiniteScroll) {
    this.authService.getListPage('prestasi', this.page).then((result) => {
      let temp: any; temp = result;
      console.log("row : " + temp.length);
      for (var i = 0; i < temp.length; i++) {
        this.data.push(result[i]);
      }

      infiniteScroll.complete();
      this.page = this.page + 1;

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

  goSearch() {
    this.navCtrl.parent.select(2);
  }

}
