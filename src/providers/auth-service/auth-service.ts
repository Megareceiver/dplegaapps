import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AuthService {
  urlServer: string = "http://dplega.syncardtech.com";
  urlApi: string = this.urlServer + "/slim-api";

  constructor(public http: Http, private toastCtrl: ToastController) { }


  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.urlApi + '/public/auth/', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  relogin(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.urlApi + '/public/fetch/auth/', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  
  logout() {
    localStorage.clear();
    return true;
  }

  changePassword(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.urlApi + '/public/update/password/', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  changeAccount(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(this.urlApi + '/public/update/account/', JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getListLembaga(page) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let filterData = {
        'keyword': localStorage.getItem('kelembagaan-filter-keyword'),
        'bentukLembaga': localStorage.getItem('kelembagaan-filter-bentukLembaga'),
        'wilayah': localStorage.getItem('kelembagaan-filter-wilayah'),
        'kecamatan': localStorage.getItem('kelembagaan-filter-kecamatan'),
        'kelurahan': localStorage.getItem('kelembagaan-filter-kelurahan'),
        'ajuan': localStorage.getItem('kelembagaan-filter-ajuan'),
        'valid': localStorage.getItem('kelembagaan-filter-valid'),
      };

      this.http.post(this.urlApi + '/public/list/lembaga/' + page, JSON.stringify(filterData), { headers: headers })
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getDetailLembaga(noRegistrasi) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/detail/lembaga/' + noRegistrasi, {},)
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getSummaryLembaga() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let filterData = {
        'keyword': localStorage.getItem('kelembagaan-filter-keyword'),
        'bentukLembaga': localStorage.getItem('kelembagaan-filter-bentukLembaga'),
        'wilayah': localStorage.getItem('kelembagaan-filter-wilayah'),
        'kecamatan': localStorage.getItem('kelembagaan-filter-kecamatan'),
        'kelurahan': localStorage.getItem('kelembagaan-filter-kelurahan'),
        'ajuan': localStorage.getItem('kelembagaan-filter-ajuan'),
        'valid': localStorage.getItem('kelembagaan-filter-valid'),
      };

      this.http.post(this.urlApi + '/public/summary/lembaga/', JSON.stringify(filterData), { headers: headers })
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getCountNotifications() {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/count/notifications/' + localStorage.getItem('userNotif'), {})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getListNotifications() {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/list/notifications/' + localStorage.getItem('userNotif'), {})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getList(target) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/' + target, {})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getSummary(target) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/summary/' + target + '/', {})
      .subscribe(res => {
        resolve(res.json());
      }, (err) => {
        this.presentToast(err);
          reject(err);
        });
    });
  }

  getListPage(target, page) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/list/' + target + '/' + page, {})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          this.presentToast(err);
          reject(err);
        });
    });
  }

  getOptionList(target, idRef = null) {
    return new Promise((resolve, reject) => {
      target = target + '/' ;
      if (idRef != null){ target = target + idRef; }
      this.http.get(this.urlApi + '/public/option/' + target, {})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          this.presentToast(err);
          reject(err);
        });
    });
  }

  searchData(keyword) {
    return new Promise((resolve, reject) => {
      this.http.get(this.urlApi + '/public/search/' + keyword, {})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          this.presentToast(err);
          reject(err);
        });
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: false
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}