import { Component } from '@angular/core';
import { ModalController, ViewController, NavParams, LoadingController, ToastController, ActionSheetController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

declare var cordova: any;

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  data: any;
  loading: any;
  page = 1;
  urlServer = "";

  constructor(public modalCtrl: ModalController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
    this.urlServer = authService.urlServer;
    
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

    let modal = this.modalCtrl.create(NewsDetailPage, { newsId: newsId });
    modal.present();
  }

  openForm(newsId) {

    let modal = this.modalCtrl.create(NewsFormPage, { newsId: newsId });
    modal.present();
  }

}

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class NewsDetailPage {
  urlServer = "";
  idData: string = "";
  loading: any;
  temp: any;
  data = {
    idData: "",
    judulBerita: "",
    deskripsi: "",
    urlGambar: "",
    createdBy: "",
    createdDate: ""
  };

  constructor(
    public viewCtrl: ViewController, 
    public params: NavParams, 
    public modalCtrl: ModalController, 
    public authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.idData = params.get('newsId');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getDataById('berita', this.idData).then((result) => {
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

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class NewsFormPage {
  urlServer = "";
  urlApi = "";
  idData: string = "";
  loading: any;
  temp: any;
  data = {
    idData: "",
    judulBerita: "",
    deskripsi: "",
    urlGambar: "",
    createdBy: "",
    createdDate: ""
  };

  lastImage: string = null;
  random_ = Math.floor(Math.random() * 20) + 1;
  lastImageBase64: any;
  uploadData: any;

  constructor(
    public viewCtrl: ViewController, 
    public params: NavParams, 
    public modalCtrl: ModalController, 
    public authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController,
    private camera: Camera,
    private transfer: Transfer,
    private file: File,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform
  ) {
    this.urlServer = authService.urlServer;
    this.idData = params.get('newsId');
    this.loadData();
  }

  loadData() {
    this.showLoader();
    this.authService.getDataById('berita', this.idData).then((result) => {
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

  // UPLOAD package
  public presentActionSheet() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilih gambar',
      buttons: [
        {
          text: 'Galeri',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Kamera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Batalkan',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    // Get the data of an image
    this.camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Terjadi kesalahan : Error saat memilih gambar!.');
    });
  }

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
      // this.uploadImage();
    }, error => {
      this.presentToast('Terjadi kesalahan : Error saat menyimpan gambar!.');
    });
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {

      return cordova.file.dataDirectory + img;

    }
  }

  public uploadImage() {
    // Destination URL
    var url = this.urlApi + "/public/upload/berita/gambar/";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'fileName': filename, 'idData': this.idData }
    };

    const fileTransfer: TransferObject = this.transfer.create();

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      this.loading.dismissAll()
      this.presentToast('Logo berhasil diubah.');

      // this.uploadData = data;
      // this.uploadData.response = JSON.parse(this.uploadData.response);
      // this.data.avatar = this.uploadData.response.filename;
      // this.random_ = Math.floor(Math.random() * 20) + 1;

    }, err => {
      this.loading.dismissAll()
      this.presentToast('Terjadi kesalahan! gagal mengubah logo.');
    });
  }
}
