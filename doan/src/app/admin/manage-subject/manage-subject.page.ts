import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.page.html',
  styleUrls: ['./manage-subject.page.scss'],
})
export class ManageSubjectPage implements OnInit {

  constructor(public alert: AlertController) { }

  ngOnInit() {
  }
  async addForm() {
    const alert = await this.alert.create({
      cssClass: 'add-form',
      header: 'Thêm Thành viên',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'họ và tên',
        },
        {
          name: 'password',
          type: 'text',
          placeholder: 'mật khẩu',
        },
        {
          name: 'email',
          type: 'text',
          placeholder: 'email',
        },
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
  async editForm() {
    const alert = await this.alert.create({
      cssClass: 'edit-form',
      header: 'Thay đổi thông tin',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'họ và tên',
        },
        {
          name: 'id',
          type: 'text',
          placeholder: 'id',
        },
      ],
      buttons: [
        {
          text: 'Hủy bỏ',
          role: 'cancel',
          cssClass: 'cancel-alert',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Đồng ý',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async delete() {
    const alert = await this.alert.create({
      header :'Bạn có muốn xóa không',
      subHeader :'Bạn sẽ không thể khôi phục thao tác này',
      buttons: [
        {
          text: 'Hủy',
          role:'huy',
          cssClass: 'cancel-alert',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Đồng ý',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    })
    await alert.present();
  }
}
