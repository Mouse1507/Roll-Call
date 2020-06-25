import {
  Component,
  OnInit
} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {FbserviceService} from '../../service/fbservice.service'
@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.page.html',
  styleUrls: ['./manage-teacher.page.scss'],
})
export class ManageTeacherPage implements OnInit {

  constructor(public alert: AlertController, private fbs:FbserviceService) {
  }

  ListGV:any
  ngOnInit() {
    this.init()
  }

  init()
  {
    this.fbs.GetListGV().then((res)=>{
      this.ListGV = res;
    })
  }
  async showInfo(name, id, email)
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
        {
          disabled:true,
          value: 'Email: '+ email
        }
      ],
      buttons:[
        {
          text: 'Đóng'
        }
      ]
    });
    await alert.present();
  }

  clickBtn(event) {
    document.querySelector('.btn-teacher.active').classList.remove('active');
    event.currentTarget.classList.add('active');
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
        {
          name: 'email',
          type: 'text',
          placeholder: 'Email',
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
            this.fbs.Admin_add_gv(res.id, res.name, res.email).then((mes)=>{
              console.log(mes);
              this.fbs.Admin_add_account(res.id, 'gv', res.email).then((mes)=>{
                console.log(mes);
              })
              this.ngOnInit();
            })
          }
        }
      ]
    });

    await alert.present();
  }
  async editForm(id, name, email) {
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
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          value: email,
          disabled: true
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
            this.fbs.Admin_update_gv(id, res.name, res.email).then((mes)=>{
              console.log(mes);
            });
            this.ngOnInit();
            this.success('Cập nhật')
            this.fbs.Admin_update_account(id, res.email, 'act', 'gv').then((mes)=>{
              console.log(mes);
            })
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
            this.fbs.Admin_delete_gv(id).then((mes)=>{
              console.log(mes);
            })
            this.fbs.Admin_delete_account(id).then((mes)=>{
              console.log(mes);
            })
            this.init();
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
  filterSearch(searchBar) {
    var value = searchBar.currentTarget.value.toUpperCase();
    if (!value) {
      this.init();
      return;
    }
    this.ListGV = this.ListGV.filter(grid => {
      if (grid.name || value) {
        return grid.name.toUpperCase().indexOf(value) > -1;
      }
    });
  }
}