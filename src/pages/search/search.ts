import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { KelembagaanDetailPage } from '../kelembagaan/kelembagaan';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  loading: any;
  data: any;
  dataClone: any;
  keyword: string = "";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  searchData(keyCode) {
    if (keyCode == 13){
      if (this.keyword != ""){
        this.showLoader();
        this.authService.searchData(this.keyword).then((result) => {
          this.data = result;
          this.dataClone = this.data;
          this.dataClone[-1] = { grup: 'start' };
          console.log(this.data);
          this.loading.dismiss();
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
          return false;
        });
      }else{
        this.data = [];
        this.dataClone = [];
      }
    }
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

  openLembaga(reff) {
    let modal = this.modalCtrl.create(KelembagaanDetailPage, { reff: reff });
    modal.present();
  }

}