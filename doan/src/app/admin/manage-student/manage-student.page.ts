import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FbserviceService} from '../../service/fbservice.service';
@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.page.html',
  styleUrls: ['./manage-student.page.scss'],
})
export class ManageStudentPage implements OnInit {

  constructor(public alert: AlertController, private fbs:FbserviceService) { }

  clickBtn(event) {
    document.querySelector('.btn-teacher.active').classList.remove('active');
    event.currentTarget.classList.add('active');
  }
  

  ListSV:any
  ngOnInit() {
    this.init()
  }

  init()
  {
    this.fbs.GetListSV().then((res)=>{
      this.ListSV = res;
    })
  }
  async showInfo(id, name)
  {
    const alert = await this.alert.create({
      header: 'Infor',
      inputs:[
        {
          disabled:true,
          value: 'Name: '+ name
        },
        {
          disabled:true,
          value: 'ID: '+ id
        },
        
      ],
      buttons:[
        {
          text: 'Đóng'
        }
      ]
    });
    await alert.present();
  }

 


  async addForm() {
    const alert = await this.alert.create({
      cssClass: 'add-form',
      header: 'Thêm Thành viên',
      inputs: [
        {
          name: 'id',
          type: 'text',
          placeholder: 'ID',
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
        },
        
      ],
      buttons: [
        {
          text: 'Hủy',
          role: 'cancel',
          cssClass: 'cancel-alert',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Đồng ý',
          handler: (res) => {
            console.log('Confirm Ok');
            this.fbs.Admin_add_sv(res.id, res.name).then((mes)=>{
              console.log(mes);
              this.ngOnInit();
            })
          }
        }
      ]
    });

    await alert.present();
  }
  async editForm(id, name) {
    const alert = await this.alert.create({
      cssClass: 'edit-form',
      header: 'Thay đổi thông tin',
      inputs: [
        {
          name: 'id',
          type: 'text',
          value: 'ID: '+id,
          disabled: true,
          label: 'id'
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: name
        }
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
          handler: (res) => {
            console.log('Confirm Ok');
            this.fbs.Admin_update_sv(id, res.name).then((mes)=>{
              console.log(mes);
            });
            this.ngOnInit();
            this.success('Cập nhật')
            this.init()
          }
        }
      ]
    });
    await alert.present();
  }
  async delete(id) {
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
            this.fbs.Admin_delete_sv(id).then((mes)=>{
              console.log(mes);
              this.init()
            })
          }
        }
      ]
    })
    await alert.present();
  }
  async success(text){
    const alert = await this.alert.create({
      message:text+' thành công!'        
    })
    await alert.present();
  }
}
