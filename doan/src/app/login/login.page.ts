import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alert: AlertController) { }

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
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'mật khẩu mới',
        },
        ,
        {
          name: 'confirm-password',
          type: 'text',
          placeholder: 'xác nhận mật khẩu',
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
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
