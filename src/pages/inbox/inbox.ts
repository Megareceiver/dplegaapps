import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';

import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html'
})
export class InboxPage {
  loading: any;
  data: any;
  dataClone: any;
  // groupedData: [];

  constructor(public modalCtrl: ModalController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.getData();
  }

  openModal(inboxId) {

    let modal = this.modalCtrl.create(InboxDetailPage, { inboxId: inboxId });
    modal.present();
  }

  getData() {
    this.showLoader();
    this.authService.getListNotifications().then((result) => {
      this.data = result;
      this.dataClone = this.data;
      this.dataClone[-1] = { tanggal: 'start' };
      this.loading.dismiss();
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

}


@Component({
  selector: 'page-detailInbox',
  templateUrl: 'detail.html'
})
export class InboxDetailPage {
  idData: string = "";
  filterWilayah: string = "";
  filterKecamatan: string = "";
  filterKelurahan: string = "";
  filterStatus: string = "";
  loading: any;
  temp: any;
  data= {
    judul: "",
    subjek: "",
    deskripsi: "",
    waktu: "",
    statusBaca: "",
    timestamp: "",
    tanggal: "",
    jam: "",
    createdBy: ""
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.idData = params.get('inboxId');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getNotifications(this.idData).then((result) => {
      this.temp = result;
      this.data = this.temp;
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

