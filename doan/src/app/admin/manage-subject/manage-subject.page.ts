import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FbserviceService} from '../../service/fbservice.service';

@Component({
  selector: 'app-manage-subject',
  templateUrl: './manage-subject.page.html',
  styleUrls: ['./manage-subject.page.scss'],
})
export class ManageSubjectPage implements OnInit {

  constructor(public alert: AlertController, private fbs:FbserviceService) { }

  ListOBJ:any
  ngOnInit() {
    this.init()
  }

  async showInfo(id, name, tcnumber, lsnumber, start, end)
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
          value: 'So tin chi: '+ tcnumber
        },
        {
          disabled:true,
          value: 'So tiet : '+ lsnumber
        },
        {
          disabled:true,
          value: 'Ngay bat dau : '+ start
        },
        {
          disabled:true,
          value: 'Ngay ket thuc: '+ end
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
  init()
  {
    this.fbs.GetListObject().then((res)=>{
      this.ListOBJ = res;
    })
  }
  async addForm() {
    const alert = await this.alert.create({
      cssClass: 'add-form',
      header: 'Thêm Môn Học',
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
          name: 'tcnumber',
          type: 'text',
          placeholder: 'So tin chi',
        },
        {
          name: 'lsnumber',
          type: 'text',
          placeholder: 'So tiet',
        },
        {
          name: 'start',
          type: 'date',
          placeholder: 'Ngay bat dau',
        },
        {
          name: 'end',
          type: 'date',
          placeholder: 'Ngay ket thuc',
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
            this.fbs.Admin_add_object(res.id, res.name, res.tcnumber, res.lsnumber, res.start, res.end).then((mes)=>{
              console.log(mes);
              this.ngOnInit();
            })
          }
        }
      ]
    });

    await alert.present();
  }
  async editForm(id, name, tcnumber, lsnumber, start, end) {
    const alert = await this.alert.create({
      cssClass: 'edit-form',
      header: 'Thay đổi thông tin',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Ten mon hoc',
          value: name
        },
        {
          name: 'id',
          type: 'text',
          value:'ID: '+ id,
          disabled:true
        },
        {
          name: 'tcnumber',
          type: 'text',
          placeholder: 'So tin chi',
          value: tcnumber
        },
        {
          name: 'lsnumber',
          type: 'text',
          placeholder: 'So tiet',
          value:lsnumber
        },
        {
          name: 'start',
          type: 'text',
          placeholder: 'Ngay bat dau',
          value: start
        },
        {
          name: 'end',
          type: 'text',
          placeholder: 'Ngay ket thuc',
          value: end
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
          handler: (res) => {
            console.log('Confirm Ok');
            this.fbs.Admin_update_object(id, res.name, res.tcnumber, res.lsnumber, res.start, res.end).then((mes)=>{
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
            this.fbs.Admin_delete_object(id).then((mes)=>{
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
  filterSearch(searchBar) {
    var value = searchBar.currentTarget.value.toUpperCase();
    if (!value) {
      this.init();
      return;
    }
    this.ListOBJ = this.ListOBJ.filter(grid => {
      if (grid.name || value) {
        return grid.name.toUpperCase().indexOf(value) > -1;
      }
    });
  }
}
