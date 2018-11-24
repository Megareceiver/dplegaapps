import { Component } from '@angular/core';
import { ModalController, AlertController, ViewController, NavParams, LoadingController, ToastController, ActionSheetController, Platform  } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';

declare var cordova: any;

@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  formPage: Array<any>;
  session_noRegistrasi: string = null;
  userLevel = "";
  constructor(public modalCtrl: ModalController, public alertCtrl: AlertController) {

    this.formPage = [
      FormKelembagaanPage,
      FormLegalitasPage,
      FormSejarahPage,
      FormKepengurusanPage,
      FormUsahaPage,
      FormHirarkiPage,
      FormPrestasiPage,
      FormKoleksiPage
    ];

    this.userLevel = localStorage.getItem('userLevel');
  }

  openModal(index) {

    let modal = this.modalCtrl.create(this.formPage[index]);
    modal.present();
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Konfirmasi',
      message: 'Apakah Anda ingin menghentikan sesi Lembaga ini?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

}


// FORM Kelembagaan
@Component({
  selector: 'page-formKelembagaan',
  templateUrl: 'kelembagaan.html'
})
export class FormKelembagaanPage {
  urlServer = "";
  urlApi = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "",
    avatar: null,
    nama: "",
    alamat: "",
    telp: "",
    email: "",
    username: "",
    noRt: "",
    noRw: "",
    kodeKelurahan: "",
    kodeKecamatan: "",
    kodeWilayah: "",
    statusVerifikasi: "",
    kodeBentukLembaga: "",
    namaBentukLembaga: "",
    mediaSosial: "",
    langitude: "",
    latitude: "",
    noNpwp: "",
    jumlahPengurus: "",
    visiLembaga: "",
    misiLembaga: "",
    organisasiAfiliasi: "",
    namaBidangGerak: "",
    alamat_: "",
    kodeBidangGerak: "",
    catatanLain: ""
  }

  optionChange  = {
    kodeKelurahan: "",
    kodeKecamatan: "",
    kodeWilayah: ""
  }

  wilayah: any;
  kecamatan: any;
  kelurahan: any;
  bidangGerak: any;
  bentukLembaga: any;
  flag: string = "init";

  lastImage: string = null;
  random_ = Math.floor(Math.random() * 20) + 1;
  lastImageBase64: any;
  uploadData: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private camera: Camera,
    private transfer: Transfer,
    private file: File,
    private filePath: FilePath,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform, 
    ) {

    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if (canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Accuration Request successful'),
          error => console.log('Error requesting location permissions', error)
        );
      }

    }, (err) =>{
      console.log(err);
    });

    this.urlServer = authService.urlServer;
    this.noRegistrasi = (params.get('noRegistrasi') != undefined ? params.get('noRegistrasi') : '');
    this.loadInit();

  }

  loadInit() {
    this.showLoader();
    
    this.authService.getOptionList('bentuk-lembaga').then((result) => {
      this.bentukLembaga = result;
      this.authService.getOptionList('bidang-gerak').then((result) => {
        this.bidangGerak = result;
        this.authService.getOptionList('wilayah').then((result) => {
          this.wilayah = result;

          if(this.noRegistrasi != null && this.noRegistrasi != ''){
            this.authService.getDetailLembaga(this.noRegistrasi).then((result) => {
              this.temp = result;
              this.data = this.temp;
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

  loadKecamatan(idWilayah) {
    if (idWilayah != "") {
      this.authService.getOptionList('kecamatan', idWilayah).then((result) => {
        this.kecamatan = result;
        if (this.flag != "init") this.data.kodeKelurahan = "";
      }, (err) => {
        this.presentToast(err);
        return false;
      });
    } else {
      this.kecamatan = [];
      this.kelurahan = [];
      this.data.kodeKecamatan = "";
      this.data.kodeKelurahan = "";
    }
  }

  loadKelurahan(idKecamatan) {
    if (idKecamatan != "") {
      this.authService.getOptionList('kelurahan', idKecamatan).then((result) => {
        this.kelurahan = result;
        this.flag = "end";
      }, (err) => {
        this.presentToast(err);
        return false;
      });
    } else {
      this.kelurahan = [];
      this.data.kodeKelurahan = "";
    }
  }

  getCurrentLocation(){
    console.log('trying to get location');
    var options = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0
    };
    
    this.geolocation.getCurrentPosition(options).then((resp) => {
      console.log(resp);
      this.data.latitude = resp.coords.latitude.toString();
      this.data.langitude = resp.coords.longitude.toString();
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      console.log('trying to get location :: from watchposition');
      console.log(data);
      // this.data.latitude = data.coords.latitude.toString();
      // this.data.langitude = data.coords.longitude.toString();
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });
  }

  updateLembaga() {
    this.data.noRegistrasi = this.noRegistrasi;
    this.showLoader();
    this.authService.updateDataLembaga('', this.data).then((result) => {
      this.temp = result;
      if (this.temp.status == 'success') {
        this.dismiss();
        this.presentToast('Data kelembagaan berhasil diperbarui.');
      } else {
        this.presentToast('Data kelembagaan gagal diperbarui, periksa kembali inputan Anda!');
      }
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
      return false;
    });
  }

  insertLembaga() {
    if(
        this.data.kodeBentukLembaga == "" ||
        this.data.nama == "" ||
        this.data.alamat_ == "" ||
        this.data.noRt == "" ||
        this.data.noRw == "" ||
        this.data.kodeWilayah == "" ||
        this.data.kodeKecamatan == "" ||
        this.data.kodeKelurahan == "" ||
        this.data.telp == "" ||
        this.data.email == ""
      ){

      this.presentToast("Harap mengisi semua poin yang ditandai (*).");
      return false; 
    }

    this.showLoader();
    this.authService.insertNewLembaga(this.data).then((result) => {
      this.temp = result;
      if (this.temp.status == 'success') {
        this.dismiss();
        this.presentToast('Data kelembagaan berhasil didaftarkan.');
      } else {
        this.presentToast('Data kelembagaan gagal didaftarkan, periksa kembali inputan Anda!');
      }
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
      this.uploadImage();
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
    var url = this.urlApi + "/public/upload/lembaga/logo/";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: { 'filename': filename, 'noRegistrasi': this.noRegistrasi }
    };

    console.log(targetPath);
    console.log(options);

    const fileTransfer: TransferObject = this.transfer.create();

    this.loading = this.loadingCtrl.create({
      content: 'Uploading...',
    });
    this.loading.present();

    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, url, options).then(data => {
      console.log(data);
      this.loading.dismissAll()
      this.presentToast('Logo berhasil diubah.');

      // this.uploadData = data;
      // this.uploadData.response = JSON.parse(this.uploadData.response);
      // this.data.avatar = this.uploadData.response.filename;
      // this.random_ = Math.floor(Math.random() * 20) + 1;

    }, err => {
      console.log(err);
      this.loading.dismissAll()
      this.presentToast('Terjadi kesalahan! gagal mengubah logo.');
    });
  }
}

// FORM Legalitas
@Component({
  selector: 'page-formLegalitas',
  templateUrl: 'legalitas.html'
})
export class FormLegalitasPage {
  urlServer = "";
  urlApi = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  data: any;
  temp: any;
  formData: any;
  chooserDumb= [];

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private transfer: Transfer, 
    public alertCtrl: AlertController
  ) {
    this.urlApi = authService.urlApi;
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('noRegistrasi');
    this.namaLembaga = params.get('namaLembaga');
    this.loadInit();
  }

  loadInit() {
    this.authService.getKelengkapanLembaga('legalitas-form', this.noRegistrasi).then((result) => {
      this.data = result;
      this.formData = result;
    }, (err) => {
      this.presentToast(err);
      return false;
    });
  }

  openChooser(index) {
    this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then(filePathResolved => {
        console.log('resolved' + filePathResolved);
        console.log('uri' + uri);
        this.chooserDumb[index] = {
          uri: uri,
          resolved: filePathResolved,
          filename: filePathResolved.substring(filePathResolved.lastIndexOf('/') + 1)
        };
      }).catch(e => console.log(e));
    }).catch(e => console.log(e));
  }

  updateLembaga(index) {
    console.log(this.formData[index]);
    if (this.formData[index].statusVerifikasi == '1'){
      const confirm = this.alertCtrl.create({
        title: 'Konfirmasi',
        message: 'Mengubah legalitas akan mengubah status legalitas menjadi "Belum verifikasi", Apa Anda yakin mengubah legalitas?',
        buttons: [
          {
            text: 'Tidak',
            handler: () => {
              
            }
          },
          {
            text: 'Ya',
            handler: () => {
              this.updateLembaga_(index);
            }
          }
        ]
      });
      confirm.present();
    }else{
      this.updateLembaga_(index);
    }
  }

  updateLembaga_(index){
    this.formData[index].noRegistrasi = this.noRegistrasi;
    this.formData[index].filename = "";

    if (this.chooserDumb[index] == undefined) {
      this.chooserDumb[index] = {
        uri: '',
        resolved: '',
        filename: ''
      };
    }

    if (this.chooserDumb[index].filename != "") {
      console.log('upload file');
      // Destination URL
      var url = this.urlApi + "/public/update/lembaga/legalitas";

      // File for Upload
      var targetPath = this.chooserDumb[index].uri;

      // File name only
      var filename = this.chooserDumb[index].filename;
      this.formData[index].filename = filename;

      var options = {
        fileKey: "file",
        fileName: filename,
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: this.formData[index]
      };

      const fileTransfer: TransferObject = this.transfer.create();

      this.loading = this.loadingCtrl.create({
        content: 'Uploading...',
      });
      this.loading.present();

      // Use the FileTransfer to upload the image
      fileTransfer.upload(targetPath, url, options).then(data => {
        console.log('--- hasil upload');
        console.log(data);
        this.loading.dismissAll()
        this.presentToast('Data legalitas berhasil diperbarui.');
        this.dismiss();
      }, err => {
        console.log(err);
        this.loading.dismissAll()
        this.presentToast('Data legalitas gagal diperbarui, periksa kembali inputan Anda!');
      });
    } else {
      console.log('gk upload file');
      this.showLoader();
      this.authService.updateDataLembaga('legalitas', this.formData[index]).then((result) => {
        this.temp = result;
        console.log(result);
        if (this.temp.status == 'success') {
          this.presentToast('Data legalitas berhasil diperbarui.');
          this.dismiss();
        } else {
          this.presentToast('Data legalitas gagal diperbarui, periksa kembali inputan Anda!');
        }
        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
        return false;
      });
    }

    this.chooserDumb[index] = {
      uri: '',
      resolved: '',
      filename: ''
    };
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

// FORM Sejarah
@Component({
  selector: 'page-formSejarah',
  templateUrl: 'sejarah.html'
})
export class FormSejarahPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "",
    deskripsi: "",
    tanggalDidirikan: "",
    kepemilikan: "",
    statusTanah: "",
    statusSertifikasi: "",
    luasTanah: "",
    satuanLuasTanah: "",
    luasBangunan: "",
    satuanLuasBangunan: "",
    kondisiBangunan: "",
    JumlahBangunan: "",
    statusSarana: "",
    statusStrukturKepengurusan: "",
    urlGambarStrukturKepengurusan: "",
    bahasaPengantar: "",
    statusSensus: "",
    statusBantuanPemerintah: "",
    kondisiGeografis: "",
    potensiWilayah: "",
    jenisWilayah: "",
    catatanLain: "",
  }

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('noRegistrasi');
    this.namaLembaga = params.get('namaLembaga');
    this.loadInit();
  }

  loadInit() {
    this.authService.getKelengkapanLembaga('sejarah', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
    }, (err) => {
      this.presentToast(err);
      return false;
    });
  }

  updateLembaga() {
    this.data.noRegistrasi = this.noRegistrasi;
    this.showLoader();
    this.authService.updateDataLembaga('sejarah', this.data).then((result) => {
      this.temp = result;
      if (this.temp.status == 'success') {
        this.dismiss();
        this.presentToast('Data sejarah berhasil diperbarui.');
      } else {
        this.presentToast('Data sejarah gagal diperbarui, periksa kembali inputan Anda!');
      }
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

// FORM Kepengurusan
@Component({
  selector: 'page-formKepengurusan',
  templateUrl: 'kepengurusan.html'
})
export class FormKepengurusanPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "",
    penanggungJawab: "",
    jabatan: "",
    alamat: "",
    noRt: "",
    noRw: "",
    kodeKelurahan: "",
    kodeKecamatan: "",
    kodeWilayah: "",
    kodeProvinsi: "",
    noTelp: "",
    kewarganegaraan: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    agama: "",
    jabatanLain: "",
    pendidikan: "",
    kompetensi: "",
    catatan: "",
  }

  wilayah: any;
  kecamatan: any;
  kelurahan: any;
  bidangGerak: any;
  bentukLembaga: any;
  flag: string = "init";

  constructor(public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('noRegistrasi');
    this.namaLembaga = params.get('namaLembaga');
    this.loadInit();
  }

  loadInit() {
    this.showLoader();
      this.authService.getOptionList('wilayah').then((result) => {
        this.wilayah = result;

        this.authService.getKelengkapanLembaga('kepengurusan', this.noRegistrasi).then((result) => {
          this.temp = result;
          this.data = this.temp;
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

  loadKecamatan(idWilayah) {
    if (idWilayah != "") {
      this.authService.getOptionList('kecamatan', idWilayah).then((result) => {
        this.kecamatan = result;
        if (this.flag != "init") this.data.kodeKelurahan = "";
      }, (err) => {
        this.presentToast(err);
        return false;
      });
    } else {
      this.kecamatan = [];
      this.kelurahan = [];
      this.data.kodeKecamatan = "";
      this.data.kodeKelurahan = "";
    }
  }

  loadKelurahan(idKecamatan) {
    if (idKecamatan != "") {
      this.authService.getOptionList('kelurahan', idKecamatan).then((result) => {
        this.kelurahan = result;
        this.flag = "end";
      }, (err) => {
        this.presentToast(err);
        return false;
      });
    } else {
      this.kelurahan = [];
      this.data.kodeKelurahan = "";
    }
  }

  updateLembaga() {
    this.data.noRegistrasi = this.noRegistrasi;
    this.showLoader();
    this.authService.updateDataLembaga('kepengurusan', this.data).then((result) => {
      this.temp = result;
      if (this.temp.status == 'success') {
        this.dismiss();
        this.presentToast('Data kepengurusan berhasil diperbarui.');
      } else {
        this.presentToast('Data kepengurusan gagal diperbarui, periksa kembali inputan Anda!');
      }
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

// FORM Usaha
@Component({
  selector: 'page-formUsaha',
  templateUrl: 'usaha.html'
})
export class FormUsahaPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "",
    namaUsaha: "",
    jenisUsaha: "",
    detailUsaha: "",
    jumlahPekerja: "",
    catatan: "",
  }

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('noRegistrasi');
    this.namaLembaga = params.get('namaLembaga');
    this.loadInit();
  }

  loadInit() {
    this.authService.getKelengkapanLembaga('usaha', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
    }, (err) => {
      this.presentToast(err);
      return false;
    });
  }

  updateLembaga() {
    this.data.noRegistrasi = this.noRegistrasi;
    this.showLoader();
    this.authService.updateDataLembaga('usaha', this.data).then((result) => {
      this.temp = result;
      if (this.temp.status == 'success') {
        this.dismiss();
        this.presentToast('Data usaha berhasil diperbarui.');
      } else {
        this.presentToast('Data usaha gagal diperbarui, periksa kembali inputan Anda!');
      }
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

// FORM Hirarki
@Component({
  selector: 'page-formHirarki',
  templateUrl: 'hirarki.html'
})
export class FormHirarkiPage {

  constructor(public viewCtrl: ViewController) {
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

// FORM Koleksi
@Component({
  selector: 'page-formKoleksi',
  templateUrl: 'koleksi.html'
})
export class FormKoleksiPage {
  urlServer = "";
  noRegistrasi: string;
  namaLembaga: string;
  loading: any;
  temp: any;
  data = {
    noRegistrasi: "",
    judulKoleksi: "",
    jenisKoleksi: "",
    deskripsi: "",
  }

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
    ) {
    this.urlServer = authService.urlServer;
    this.noRegistrasi = params.get('noRegistrasi');
    this.namaLembaga = params.get('namaLembaga');
    this.loadInit();
  }

  loadInit() {
    this.authService.getKelengkapanLembaga('koleksi', this.noRegistrasi).then((result) => {
      this.temp = result;
      this.data = this.temp;
    }, (err) => {
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

// FORM Prestasi
@Component({
  selector: 'page-formPrestasi',
  templateUrl: 'prestasi.html'
})
export class FormPrestasiPage {
  data: Array<{ noreg: string, nama_prestasi: string, nama_lembaga: string, bentuk_lembaga: string }>;

  constructor(public viewCtrl: ViewController) {
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