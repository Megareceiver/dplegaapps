import { Component } from '@angular/core';
import { LoadingController, ModalController, Platform, NavParams, ViewController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class VerificationPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  bentukLembaga: string;
  lembaga: string;
  loading: any;
  temp: any;
  data: any;
  dataClone: any;
  statusValid: string = "";

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.lembaga = params.get('reff2');
    this.bentukLembaga = params.get('reff3');
    this.namaLembaga = params.get('reff4');
    this.loadData();
  }

  openRevision(reff, reff2) {

    let modal = this.modalCtrl.create(RevisionPage, { reff: reff, reff2: reff2 });
    modal.present();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('verifikasi', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
      this.statusValid = this.temp[0].statusValid;
      this.dataClone = this.data;
      this.dataClone[-1] = { idGrup: 'start' };
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
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

}

@Component({
  templateUrl: 'revision.html'
})
export class RevisionPage {
  urlServer = "";
  noRegistrasi: string;
  lembaga: string;
  loading: any;
  temp: any;
  data: any;
  dataClone: any;
  countData: number = 0;
  catatanRevisi: string = "";

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.lembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('revisi', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
      this.dataClone = this.data;
      this.dataClone[-1] = { tanggal: 'start' };
      this.countData = Object.keys(this.data).length;
      
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  insertData(keyCode){
    if (keyCode == 13) {
      if (this.catatanRevisi != "") {
        var param = { 
          noRegistrasi: this.noRegistrasi, 
          catatan: this.catatanRevisi, 
          username: localStorage.getItem('username') 
        };
        
        this.authService.insertDataLembaga('revisi', param).then((result) => {
          this.temp = result;
          if (this.temp.status == "success"){
            this.loadData();
            this.catatanRevisi = "";
          }else
            this.presentToast('Terjadi kesalahan! revisi gagal ditambahkan.');
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
          return false;
        });
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
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
}
