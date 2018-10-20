import { Component } from '@angular/core';
import { NavController, ModalController, ViewController, LoadingController, ToastController, Events } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  other: Array<{ title: string, component: any, icon: string, color: string }>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    // set our app's pages

    this.other = [
      { title: 'Informasi Akun', component: SettingAccountPage, icon: 'information-circle', color: 'primary' },
      { title: 'Ganti Password', component: SettingChangePasswordPage, icon: 'lock', color: 'bright' },
    ];
  }

  openModal(index) {
    let modal = this.modalCtrl.create(this.other[index].component);
    modal.present();
  }

}

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class SettingAccountPage {
  accountData = {
    avatar: localStorage.getItem('urlGambar'),
    noRegistrasi: localStorage.getItem('noRegistrasi'),
    nama: localStorage.getItem('nama'),
    jabatan: localStorage.getItem('jabatan'),
    alamat: localStorage.getItem('alamatLengkap'),
    noTelp: localStorage.getItem('noTelp'),
    email: localStorage.getItem('email'),
    username: localStorage.getItem('username'),
    userLevel: localStorage.getItem('userLevel'),
    statusAkses: ''
  }

  constructor(public events: Events, public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    if(this.accountData.userLevel == '7'){
      this.accountData.statusAkses = "Super Admin";
    } else if (this.accountData.userLevel == '3') {
      this.accountData.statusAkses = "Operator";
    } else if (this.accountData.userLevel == '2') {
      this.accountData.statusAkses = "Penyuluh";
    } else if (this.accountData.userLevel == '1') {
      this.accountData.statusAkses = "Lembaga";
    }

    events.subscribe('accountPage:reload', () => {
      this.refreshData();
    });
    
  }

  refreshData(){
    this.accountData = {
      avatar: localStorage.getItem('urlGambar'),
      noRegistrasi: localStorage.getItem('noRegistrasi'),
      nama: localStorage.getItem('nama'),
      jabatan: localStorage.getItem('jabatan'),
      alamat: localStorage.getItem('alamatLengkap'),
      noTelp: localStorage.getItem('noTelp'),
      email: localStorage.getItem('email'),
      username: localStorage.getItem('username'),
      userLevel: localStorage.getItem('userLevel'),
      statusAkses: this.accountData.statusAkses
    }
  }

  openForm(){
    let modal = this.modalCtrl.create(SettingFormAccountPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

@Component({
  selector: 'page-changePassword',
  templateUrl: 'changePassword.html'
})
export class SettingChangePasswordPage {
  loading: any;
  temp: any;
  data = {
    status: 'failed',
    data: '0'
  };
  accountData = {
    username: localStorage.getItem('username'),
    oldPassword: '',
    newPassword: '',
    retypePassword: ''
  };

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  changePassword(){
    this.showLoader();
    this.authService.changePassword(this.accountData).then((result) => {
      this.temp = result;
      this.data = this.temp;
      this.loading.dismiss();

      if (this.data.status == 'success'){
        this.presentToast('Password berhasil diubah!');
      }else{
        this.presentToast('Password gagal diubah, perika kembali Password Anda!');
      }

      this.accountData = {
        username: localStorage.getItem('username'),
        oldPassword: '',
        newPassword: '',
        retypePassword: ''
      };
    }, (err) => {
      this.accountData = {
        username: localStorage.getItem('username'),
        oldPassword: '',
        newPassword: '',
        retypePassword: ''
      };
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Harap tunggu...'
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

@Component({
  selector: 'page-formAccount',
  templateUrl: 'formAccount.html'
})
export class SettingFormAccountPage {
  loading: any;
  temp: any;

  wilayah: any;
  kecamatan: any;
  kelurahan: any;
  reloginData: any;
  data = { status: 'failed', data: '0' };
  accountData = {
    avatar: localStorage.getItem('urlGambar'),
    nama: localStorage.getItem('nama'),
    jabatan: localStorage.getItem('jabatan'),
    alamat: localStorage.getItem('alamat'),
    noTelp: localStorage.getItem('noTelp'),
    email: localStorage.getItem('email'),
    username: localStorage.getItem('username'),
    noRt: localStorage.getItem('noRt'),
    noRw: localStorage.getItem('noRw'),
    kodeKelurahan: localStorage.getItem('kodeKelurahan'),
    kodeKecamatan: localStorage.getItem('kodeKecamatan'),
    kodeWilayah: localStorage.getItem('kodeWilayah')
  }

  constructor(public events: Events, public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.loadInit();
  }

  loadInit() {
    this.showLoader();
   
    this.authService.getOptionList('wilayah').then((result) => {
      this.wilayah = result;

      if (this.accountData.kodeKecamatan != "") {
        this.authService.getOptionList('kecamatan', this.accountData.kodeWilayah).then((result) => {
          this.kecamatan = result;

          if (this.accountData.kodeKelurahan != "") {
            this.authService.getOptionList('kelurahan', this.accountData.kodeKecamatan).then((result) => {
              this.kelurahan = result;
              this.loading.dismiss();
            }, (err) => {
              this.loading.dismiss();
              this.presentToast(err);
              return false;
            });
          } else {
            this.loading.dismiss();
          }
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
          return false;
        });
      } else {
        this.loading.dismiss();
      }

    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
   
  }

  loadKecamatan(idWilayah) {
    if (idWilayah != "") {
      this.showLoader();
      this.authService.getOptionList('kecamatan', idWilayah).then((result) => {
        this.kecamatan = result;
        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        return false;
      });
    } else {
      this.kecamatan = [];
      this.kelurahan = [];
      this.accountData.kodeKecamatan = "";
      this.accountData.kodeKelurahan = "";
    }
  }

  loadKelurahan(idKecamatan) {
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
      this.accountData.kodeKelurahan = "";
    }
  }

  changeAccount() {
    this.showLoader();
    this.authService.changeAccount(this.accountData).then((result) => {
      this.temp = result;
      this.data = this.temp;

      if (this.data.status == 'success') {

        localStorage.setItem('nama', this.accountData.nama);
        localStorage.setItem('jabatan', this.accountData.jabatan);
        localStorage.setItem('alamat', this.accountData.alamat);
        localStorage.setItem('noTelp', this.accountData.noTelp);
        localStorage.setItem('email', this.accountData.email);
        localStorage.setItem('noRt', this.accountData.noRt);
        localStorage.setItem('noRw', this.accountData.noRw);
        localStorage.setItem('kodeKelurahan', this.accountData.kodeKelurahan);
        localStorage.setItem('kodeKecamatan', this.accountData.kodeKecamatan);
        localStorage.setItem('kodeWilayah', this.accountData.kodeWilayah);
        
        this.authService.relogin(this.accountData).then((result) => {
          this.loading.dismiss();
          this.presentToast('Informasi Akun berhasil diubah!');
          this.reloginData = result;

          localStorage.setItem('nama', this.reloginData.nama);
          localStorage.setItem('jabatan', this.reloginData.jabatan);
          localStorage.setItem('alamat', this.reloginData.alamat);
          localStorage.setItem('alamatLengkap', this.reloginData.alamatLengkap);
          localStorage.setItem('noTelp', this.reloginData.noTelp);
          localStorage.setItem('email', this.reloginData.email);
          // localStorage.setItem('urlGambar', this.reloginData.urlGambar);
          localStorage.setItem('noRt', this.reloginData.noRt);
          localStorage.setItem('noRw', this.reloginData.noRw);
          localStorage.setItem('kodeKelurahan', this.reloginData.kodeKelurahan);
          localStorage.setItem('kodeKecamatan', this.reloginData.kodeKecamatan);
          localStorage.setItem('kodeWilayah', this.reloginData.kodeWilayah);

          this.accountData = {
            avatar: localStorage.getItem('urlGambar'),
            nama: localStorage.getItem('nama'),
            jabatan: localStorage.getItem('jabatan'),
            alamat: localStorage.getItem('alamat'),
            noTelp: localStorage.getItem('noTelp'),
            email: localStorage.getItem('email'),
            username: localStorage.getItem('username'),
            noRt: localStorage.getItem('noRt'),
            noRw: localStorage.getItem('noRw'),
            kodeKelurahan: localStorage.getItem('kodeKelurahan'),
            kodeKecamatan: localStorage.getItem('kodeKecamatan'),
            kodeWilayah: localStorage.getItem('kodeWilayah')
          }

          this.events.publish('accountPage:reload');
          
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
        });
      } else {
        this.presentToast('Informasi Akun gagal diubah, perika kembali inputan Anda!');
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Harap tunggu...'
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
