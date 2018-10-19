import { Component } from '@angular/core';
import { ModalController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  data: any;
  loading: any;
  page = 1;

  constructor(public modalCtrl: ModalController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    // get initial data
    this.getData();
  }

  getData() {
    this.showLoader();
    this.authService.getListPage('berita', this.page).then((result) => {
      this.data = result;
      this.page = this.page + 1;
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  loadData(infiniteScroll) {
    this.authService.getListPage('berita', this.page).then((result) => {
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

  openModal(newsId) {

    let modal = this.modalCtrl.create(NewsDetailPage, newsId);
    modal.present();
  }

  openForm(newsId) {

    let modal = this.modalCtrl.create(NewsFormPage, newsId);
    modal.present();
  }

}

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class NewsDetailPage {
  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class NewsFormPage {
  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
