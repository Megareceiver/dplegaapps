import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = { username: '', password: '' };
  data: any;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    
  }

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      if (this.data != false){
        localStorage.setItem('token', this.data.userLevel);
        localStorage.setItem('idData', this.data.idData);
        if (this.data.noRegistrasi == "" || this.data.noRegistrasi == null){
          localStorage.setItem('userNotif', this.data.username);
        }else{
          localStorage.setItem('userNotif', this.data.noRegistrasi);
        }

        localStorage.setItem('noRegistrasi', this.data.noRegistrasi);
        localStorage.setItem('nama', this.data.nama);
        localStorage.setItem('jabatan', this.data.jabatan);
        localStorage.setItem('alamat', this.data.alamat);
        localStorage.setItem('alamatLengkap', this.data.alamatLengkap);
        localStorage.setItem('noTelp', this.data.noTelp);
        localStorage.setItem('email', this.data.email);
        localStorage.setItem('username', this.data.username);
        localStorage.setItem('urlGambar', this.data.urlGambar);
        localStorage.setItem('userLevel', this.data.userLevel);
        localStorage.setItem('noRt', this.data.noRt);
        localStorage.setItem('noRw', this.data.noRw);
        localStorage.setItem('kodeKelurahan', this.data.kodeKelurahan);
        localStorage.setItem('kodeKecamatan', this.data.kodeKecamatan);
        localStorage.setItem('kodeWilayah', this.data.kodeWilayah);

        // empty initial 
        localStorage.setItem('kelembagaan-filter-keyword', '');
        localStorage.setItem('kelembagaan-filter-bentukLembaga', '');
        localStorage.setItem('kelembagaan-filter-wilayah', '');
        localStorage.setItem('kelembagaan-filter-kecamatan', '');
        localStorage.setItem('kelembagaan-filter-kelurahan', '');
        localStorage.setItem('kelembagaan-filter-ajuan', '');
        localStorage.setItem('kelembagaan-filter-valid', '');
        
        this.navCtrl.setRoot(TabsPage);
      }else{
        this.presentToast('Gagal login, mohon check kembali Username dan Password Anda!');
      }
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Memeriksa...'
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

  loginSuccess(){
    this.navCtrl.setRoot(TabsPage, {})
  }

}
