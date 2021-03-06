import { Component, OnInit } from '@angular/core';
import {FbserviceService} from '../service/fbservice.service'
import {Router} from '@angular/router'
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public loadingController: LoadingController, private fbs:FbserviceService, private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  txtuser:any;
  txtpwd:any;
  txtrepwd;
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Đợi một chút',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  signup(){
    if(this.txtpwd != this.txtrepwd)
    {
      this.ErrorAlert();
    }
    else{
      this.SuccessAlert();
      this.presentLoading();
    }
  }

  async ErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Re-passpword does not mactch!',
      buttons: [{
        text:'OK',
      },
    ]
    });
    await alert.present();
  }

  async SuccessAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'Successful created Account!',
      buttons: [{
        text:'OK',
        handler:()=>{
          this.fbs.CreateAccount(this.txtuser, this.txtpwd).then((res)=>{
            console.log(res);
            this.router.navigateByUrl('login');
          })
        }
      },
    ]
    });
    await alert.present();
  }
}
