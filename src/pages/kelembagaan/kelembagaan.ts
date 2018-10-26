import { Component } from '@angular/core';
import { App, NavController, LoadingController, ModalController, Platform, NavParams, ViewController, ToastController, Events } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
// import { LaunchNavigator } from '@ionic-native/launch-navigator';

import { VerificationPage } from '../verification/verification';
import { FormKelembagaanPage } from '../form/form';
import { FormLegalitasPage } from '../form/form';
import { FormSejarahPage } from '../form/form';
import { FormKepengurusanPage } from '../form/form';
import { FormUsahaPage } from '../form/form';
import { SettingPage } from '../setting/setting';
import { LoginPage } from '../login/login';

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
  urlServer = "";
  
  constructor(public events: Events, public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, public modalCtrl: ModalController, private toastCtrl: ToastController) {
    this.urlServer = authService.urlServer;

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

  openModal(index, reff = null, reff2 = null) {
    let modal = this.modalCtrl.create(this.pages[index].component, { reff: reff, reff2: reff2 });
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
  userLevel = "";
  urlServer = "";
  detailPages: Array<{ component: any }>;
  noRegistrasi: string;
  namaLembaga: string;
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
    // private launchNavigator: LaunchNavigator, 
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    public appCtrl: App
  ) {
    this.urlServer = authService.urlServer;
    this.userLevel = localStorage.getItem('userLevel');
    
    if (this.userLevel != '1'){
      this.noRegistrasi = params.get('reff');
      this.namaLembaga = params.get('reff2');
    }else{
      this.noRegistrasi = localStorage.getItem('noRegistrasi');
      this.namaLembaga = localStorage.getItem('namaLembaga');
      
    }

    // set our app's pages
    this.detailPages = [
      { component: KelembagaanLegalitasPage },
      { component: KelembagaanSejarahPage },
      { component: KelembagaanKepengurusanPage },
      { component: KelembagaanUsahaPage },
      { component: KelembagaanPrestasiPage },
      { component: KelembagaanKoleksiPage },
      { component: VerificationPage },
      { component: SettingPage },
    ];

    // // set our form's pages
    // this.detailPages = [
    //   { component: KelembagaanLegalitasPage },
    //   { component: KelembagaanSejarahPage },
    //   { component: KelembagaanKepengurusanPage },
    //   { component: KelembagaanUsahaPage },
    //   { component: KelembagaanPrestasiPage },
    //   { component: KelembagaanKoleksiPage },
    //   { component: VerificationPage },
    // ];

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

  openModal(index, reff = null, reff2 = null, reff3 = null, reff4 = null) {
    let modal = this.modalCtrl.create(this.detailPages[index].component, { reff: reff, reff2: reff2, reff3: reff3, reff4: reff4 });
    modal.present();
  }

  loadForm() {
    let modal = this.modalCtrl.create(FormKelembagaanPage, { noRegistrasi: this.noRegistrasi });
    modal.present();
  }

  openMaps() {
    let destination = this.detail.latitude + ',' + this.detail.langitude;

    if (this.platform.is('ios')) {
      window.open('maps://?q=' + destination, '_system');
    } else {
      let label = encodeURI('');
      window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
    }

    // console.log(":" + this.detail.langitude + " : " + this.detail.latitude);
    // this.launchNavigator.navigate([this.detail.langitude, this.detail.latitude], {
    //   start: this.detail.langitude + ", " + this.detail.latitude
    // }).then(
    //     success => console.log('Launched navigator'),
    //     error => console.log('Error launching navigator', error)
    //   );

  }

  logout() {
    this.showLoader();
    this.authService.logout();
    this.appCtrl.getRootNav().push(LoginPage);
    this.loading.dismiss();
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
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data: any;
  countData : number = 0;
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.namaLembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('legalitas', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
      this.countData = Object.keys(this.data).length;
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

  loadForm(){
    let modal = this.modalCtrl.create(FormLegalitasPage, { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
    modal.present();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'sejarah.html'
})
export class KelembagaanSejarahPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "-",
    deskripsi: "-",
    tanggalDidirikan: "-",
    kepemilikan: "-",
    statusTanah: "-",
    statusSertifikasi: "-",
    luasTanah: "-",
    satuanLuasTanah: "-",
    luasBangunan: "-",
    satuanLuasBangunan: "-",
    kondisiBangunan: "-",
    JumlahBangunan: "-",
    statusSarana: "-",
    statusStrukturKepengurusan: "-",
    urlGambarStrukturKepengurusan: "-",
    bahasaPengantar: "-",
    statusSensus: "-",
    statusBantuanPemerintah: "-",
    kondisiGeografis: "-",
    potensiWilayah: "-",
    jenisWilayah: "-",
    catatanLain: "-"
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.namaLembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('sejarah', this.noRegistrasi).then((result) => {
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

  loadForm() {
    let modal = this.modalCtrl.create(FormSejarahPage, { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
    modal.present();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'kepengurusan.html'
})
export class KelembagaanKepengurusanPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "-",
    penanggungJawab: "-",
    jabatan: "-",
    alamat: "-",
    alamatLengkap: "-",
    noTelp: "-",
    kewarganegaraan: "-",
    tempatLahir: "-",
    tanggalLahir: "-",
    jenisKelamin: "-",
    agama: "-",
    jabatanLain: "-",
    pendidikan: "-",
    kompetensi: "-",
    catatan: "-"
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.namaLembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('kepengurusan', this.noRegistrasi).then((result) => {
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

  loadForm() {
    let modal = this.modalCtrl.create(FormKepengurusanPage, { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
    modal.present();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'usaha.html'
})
export class KelembagaanUsahaPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "-",
    namaUsaha: "-",
    jenisUsaha: "-",
    detailUsaha: "-",
    jumlahPekerja: "-",
    catatan: "-"
  };

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.namaLembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('usaha', this.noRegistrasi).then((result) => {
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

  loadForm() {
    let modal = this.modalCtrl.create(FormUsahaPage, { noRegistrasi: this.noRegistrasi, namaLembaga: this.namaLembaga });
    modal.present();
  }
}

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'prestasi.html'
})
export class KelembagaanPrestasiPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data: any;
  countData: number = 0;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.namaLembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('prestasi', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
      this.countData = Object.keys(this.data).length;
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

// ---------------------------------------------------------------------------

@Component({
  templateUrl: 'koleksi.html'
})
export class KelembagaanKoleksiPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data: any;
  countData: number = 0;
  formData = {
    judulKoleksi: "",
    jenisKoleksi: "",
    deskripsi: ""
  }

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('reff');
    this.namaLembaga = params.get('reff2');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getKelengkapanLembaga('koleksi', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
      this.countData = Object.keys(this.data).length;
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