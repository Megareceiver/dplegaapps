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

    let modal = this.modalCtrl.create(InboxDetailPage, inboxId);
    modal.present();
  }

  getData() {
    this.showLoader();
    this.authService.getListNotifications().then((result) => {
      this.data = result;
      this.dataClone = this.data;
      this.dataClone[-1] = { tanggal: 'start' };

      // this.data.forEach(function (o) {
      //   if (!this[o.tanggal]) {
      //     this[o.tanggal] = {
      //       t_id: o.idData,
      //       val1: 0,
      //       title: o.judul
      //     };
      //     this.groupedData.push(this[o.tanggal]);
      //   }
      //   // this[o.t_id].val1 += Number(o.val1);
      // }, Object.create(null));

      // console.log("******");
      // console.log(this.data);
      var array = [{ t_id: "1", val1: "1", title: "cash to purchase", unit: "bag" }, { t_id: "1", val1: "1", title: "cash to purchase", unit: "bag" }, { t_id: "1", val1: "1", title: "cash to purchase", unit: "bag" }, { t_id: "2", val1: "4", title: "offload", unit: "bag" }, { t_id: "2", val1: "5", title: "onroad", unit: "bag" }, { t_id: "3", val1: "5", title: "Onroad", unit: "bag" }, { t_id: "3", val1: "6", title: "Onroad", unit: "bag" }];
      // console.log(array);
      // console.log("******");

      var grouped = [];
      var grouped2 = [];

      array.forEach(function (o) {
        if (!this[o.t_id]) {
          this[o.t_id] = {
            t_id: o.t_id,
            val1: 0,
            title: o.title
          };
          grouped.push(this[o.t_id]);
        }
        this[o.t_id].val1 += Number(o.val1);
      }, Object.create(null));

      this.data.forEach(function (o) {
        if (!this[o.tanggal]) {
          this[o.tanggal] = {
            tanggal: o.tanggal,
            val1: 0
          };
          grouped2.push(this[o.tanggal]);
        }
        this[o.tanggal].val1 += 1;
      }, Object.create(null));

      console.log(grouped);
      console.log(grouped2);

      // console.log(this.groupedData);
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
  character;

  filterWilayah: string = "";
  filterKecamatan: string = "";
  filterKelurahan: string = "";
  filterStatus: string = "";
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

