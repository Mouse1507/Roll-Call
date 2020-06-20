import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FbserviceService} from '../service/fbservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alert: AlertController, private fbs:FbserviceService, private router:Router) { }

  ngOnInit() {
  }
  async forgetPass() {
    const alert = await this.alert.create({
      cssClass: 'add-form',
      header: 'Quên Mật Khẩu',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'email',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel-alert',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Send confirm Email',
          handler: (res) => {
            console.log('Confirm Ok');
            this.fbs.ForgotPwd(res.name);
          }
        }
      ]
    });

    await alert.present();
  }

  txtuser:any;
  txtpwd:any;
  login(){
    this.fbs.Login(this.txtuser, this.txtpwd).then((res)=>{
      if(res=='admin')
      {
        this.router.navigateByUrl('admin');
      }
      else
      {
        if(res=='gv')
        {
          this.router.navigateByUrl('teacher')
        }
        else{
          if(res=='ctsv')
          {
            this.router.navigateByUrl('ctsv');
          }
          else{
            this.CaughtionAlert();
          }
        }
      }
      console.log(res);
      
    })
  }

  async CaughtionAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Caughtion',
      message: 'This Account was not activated!',
      buttons: [{
        text:'OK'
        
      },
    ]
    });
    await alert.present();
  }

  admin:'duchuy96itc@gmail.com'
  loginWithGG()
  {
    var email;
    this.fbs.doGoogleLogin().then((res)=>{
      if(res=='admin')
      {
        this.router.navigateByUrl('admin');
      }
      else
      {
        if(res=='gv')
        {
          this.router.navigateByUrl('teacher')
        }
        else{
          if(res=='ctsv')
          {
            this.router.navigateByUrl('ctsv');
          }
          else{
            this.CaughtionAlert();
          }
        }
      }
      console.log(res);
    });
  }
}
