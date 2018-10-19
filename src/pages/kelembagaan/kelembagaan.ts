import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController, Platform, NavParams, ViewController, ToastController, Events } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { VerificationPage } from '../verification/verification';

@Component({
  selector: 'page-kelembagaan',
  templateUrl: 'kelembagaan.html'
})
export class KelembagaanPage {
  data: any;
  summary: any;
  pages: Array<{ component: any }>;
  loading: any;
  page = 1;
  
  constructor(public events: Events, public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private toastCtrl: ToastController) {
    // get initial data
    this.getData();

    // set our app's pages
    this.pages = [
      { component: KelembagaanFilterPage },
      { component: KelembagaanDetailPage },
    ];

    events.subscribe('kelembagaan:reload', () => {
      this.page = 1;
      this.getData();
    });
  }

  openModal(index, reff = null) {
    let modal = this.modalCtrl.create(this.pages[index].component, { reff: reff });
    modal.present();
  }

  getData() {
    this.showLoader();
    this.authService.getListLembaga(this.page).then((result) => {
      this.data = result;
      this.page = this.page + 1;

      this.authService.getSummaryLembaga().then((result) => {
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
    this.authService.getListLembaga(this.page).then((result) => {
      let temp : any; temp = result;
      console.log("row : " +temp.length);
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

}


@Component({
  templateUrl: 'filter.html'
})
export class KelembagaanFilterPage {
  filterData = { 
    keyword: localStorage.getItem('kelembagaan-filter-keyword'), 
    bentukLembaga: localStorage.getItem('kelembagaan-filter-bentukLembaga'), 
    wilayah: localStorage.getItem('kelembagaan-filter-wilayah'), 
    kecamatan: localStorage.getItem('kelembagaan-filter-kecamatan'), 
    kelurahan: localStorage.getItem('kelembagaan-filter-kelurahan'), 
    ajuan: localStorage.getItem('kelembagaan-filter-ajuan'), 
    valid: localStorage.getItem('kelembagaan-filter-valid') 
  };

  loading: any;
  wilayah: any;
  kecamatan: any;
  kelurahan: any;
  bentukLembaga: any;
  
  constructor(
    public events: Events,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController
  ) {
    this.loadInit();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadInit(){
    this.showLoader();
    this.authService.getOptionList('bentuk-lembaga').then((result) => {
      this.bentukLembaga = result;
      this.authService.getOptionList('wilayah').then((result) => {
        this.wilayah = result;
        
        if(this.filterData.kecamatan != ""){
          this.authService.getOptionList('kecamatan', this.filterData.wilayah).then((result) => {
            this.kecamatan = result;

            if (this.filterData.kelurahan != "") {
              this.authService.getOptionList('kelurahan', this.filterData.kecamatan).then((result) => {
                this.kelurahan = result;
                this.loading.dismiss();
              }, (err) => {
                this.loading.dismiss();
                this.presentToast(err);
                return false;
              });
            }else{
              this.loading.dismiss();
            }
          }, (err) => {
            this.loading.dismiss();
            this.presentToast(err);
            return false;
          });
        }else{
          this.loading.dismiss();
        }

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

  loadKecamatan(idWilayah){
    if (idWilayah != ""){
      this.showLoader();
      this.authService.getOptionList('kecamatan', idWilayah).then((result) => {
        this.kecamatan = result;
        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        return false;
      });
    }else{
      this.kecamatan = [];
      this.kelurahan = [];
      this.filterData.kecamatan = "";
      this.filterData.kelurahan = "";
    }
  }

  loadKelurahan(idKecamatan){
    if (idKecamatan != "") {
      this.showLoader();
      this.authService.getOptionList('kelurahan', idKecamatan).then((result) => {
        this.kelurahan = result;
        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        return false;
      });
    } else {
      this.kelurahan = [];
      this.filterData.kelurahan = "";
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

  filter(){
    localStorage.setItem('kelembagaan-filter-keyword', this.filterData.keyword);
    localStorage.setItem('kelembagaan-filter-bentukLembaga', this.filterData.bentukLembaga);
    localStorage.setItem('kelembagaan-filter-wilayah', this.filterData.wilayah);
    localStorage.setItem('kelembagaan-filter-kecamatan', this.filterData.kecamatan);
    localStorage.setItem('kelembagaan-filter-kelurahan', this.filterData.kelurahan);
    localStorage.setItem('kelembagaan-filter-ajuan', this.filterData.ajuan);
    localStorage.setItem('kelembagaan-filter-valid', this.filterData.valid);

    this.dismiss();
    this.events.publish('kelembagaan:reload');
  }
}


// DETAIL
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'detail.html'
})
export class KelembagaanDetailPage {
  character;
  detailPages: Array<{ component: any }>;
  noRegistrasi: string;
  loading: any;
  temp: any;
  detail = {
    avatar: "",
    noreg: "",
    nama: "",
    kodeBentukLembaga: "",
    namaBentukLembaga: "",
    catatanLain: "",
    telp: "",
    email: "",
    mediaSosial: "",
    langitude: 0,
    latitude: 0,
    alamat: "",
    namaBidangGerak: "",
    jumlahPengurus: "",
    noNpwp: "",
    organisasiAfiliasi: "",
    visiLembaga: "",
    misiLembaga: ""
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    private launchNavigator: LaunchNavigator, 
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.noRegistrasi = params.get('reff');

    // set our app's pages
    this.detailPages = [
      { component: KelembagaanLegalitasPage },
      { component: KelembagaanSejarahPage },
      { component: KelembagaanKepengurusanPage },
      { component: KelembagaanUsahaPage },
      { component: KelembagaanPrestasiPage },
      { component: KelembagaanKoleksiPage },
      { component: VerificationPage },
    ];

    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getDetailLembaga(this.noRegistrasi).then((result) => {
      this.temp = result;
      this.detail = this.temp;
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  openModal(index) {
    let modal = this.modalCtrl.create(this.detailPages[index].component);
    modal.present();
  }

  openMaps() {
    this.launchNavigator.navigate([this.detail.langitude, this.detail.latitude], {
      start: this.detail.langitude + ", " + this.detail.latitude
    }).then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
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

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'legalitas.html'
})
export class KelembagaanLegalitasPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'sejarah.html'
})
export class KelembagaanSejarahPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'kepengurusan.html'
})
export class KelembagaanKepengurusanPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'usaha.html'
})
export class KelembagaanUsahaPage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'prestasi.html'
})
export class KelembagaanPrestasiPage {
  character;
  data: Array<{ noreg: string, nama_prestasi: string, nama_lembaga: string, bentuk_lembaga: string }>;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
    this.data = [
      { noreg: '1', nama_prestasi: 'Prestasi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
      { noreg: '2', nama_prestasi: 'Prestasi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
      { noreg: '3', nama_prestasi: 'Prestasi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
      { noreg: '3', nama_prestasi: 'Prestasi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
    ]
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'koleksi.html'
})
export class KelembagaanKoleksiPage {
  character;
  data: Array<{ noreg: string, nama_koleksi: string, nama_lembaga: string, bentuk_lembaga: string }>;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
    this.data = [
      { noreg: '1', nama_koleksi: 'Koleksi 1', nama_lembaga: 'Lembaga 1', bentuk_lembaga: 'Yayasan' },
      { noreg: '2', nama_koleksi: 'Koleksi 2', nama_lembaga: 'Lembaga 2', bentuk_lembaga: 'Pondok pesantren' },
      { noreg: '3', nama_koleksi: 'Koleksi 3', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
      { noreg: '3', nama_koleksi: 'Koleksi 4', nama_lembaga: 'Lembaga 3', bentuk_lembaga: 'Madrasah Aliyah' },
    ]
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}