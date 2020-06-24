import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {FbserviceService} from '../../service/fbservice.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  constructor(public alert: AlertController, private fbs:FbserviceService) { }
  ListUsed: any
  ListSchedule:any
  ListObject:any
  ListClass:any
  ngOnInit() {
    this.init()
  }
  

  ListGVFree:any
  ListRoomFree:any
  getList(day, start, end){
    this.fbs.GetFreeTeacher(day, start, end).then((res)=>{
      this.ListGVFree = res
      
    })
    this.fbs.GetRoomFree(day, start, end).then((res)=>{
      this.ListRoomFree = res
      
    })
  }
  txtID:any
  txtIDClass:any
  txtDay:any
  txtStart:any
  txtEnd:any
  txtGV:any
  txtRoom:any
  Add(){
    console.log(this.txtID, this.txtIDClass, this.txtDay, this.txtStart, this.txtEnd, this.txtGV, this.txtRoom);
    
    this.fbs.Admin_add_schedule(this.txtID, this.txtIDClass, this.txtGV, this.txtDay, this.txtStart, this.txtEnd, this.txtRoom).then((res)=>{
      console.log(res);
      document.querySelector('.overlay').classList.remove('active');
      document.querySelector('.add-modal-box').classList.remove('active');
      this.init();
    })
  }
  txtIDClass1:any
  txtDay1:any
  txtStart1:any
  txtEnd1:any
  txtGV1:any
  txtRoom1:any
  IDedit:any
  txtDay2:any
  txtStart2:any
  txtEnd2:any
  txtIDClass2:any
  Edit(){
    this.fbs.Admin_update_schedule(this.IDedit, this.txtIDClass, this.txtGV1, this.txtDay1, this.txtStart1, this.txtEnd1, this.txtRoom1).then((res)=>{
      console.log(res);
      document.querySelector('.overlay').classList.remove('active');
      document.querySelector('.edit-modal-box').classList.remove('active');
      this.init()
    })
    
    
  }

  async showInfo(item)
  {
    
    var dayy = parseInt(item.day)+1;
    const alert = await this.alert.create({
      header: 'Infor',
      inputs:[
        {
          disabled:true,
          value: 'ID: '+ item.id
        },
        {
          disabled:true,
          value: 'ID class: '+ item.idclass
        },
        {
          disabled:true,
          value: 'ID giao vien : '+ item.idteacher
        },
        {
          disabled:true,
          value: 'Thứ: '+ dayy
        },
        {
          disabled:true,
          value: 'Tiet bat dau: '+ item.lsstart
        },
        {
          disabled:true,
          value: 'Tiet ket thuc: '+ item.lsend
        },
        {
          disabled:true,
          value: 'Phong hoc: '+ item.room
        },
      ],
      buttons:[
        {
          text: 'OK'
        }
      ]
    });
    await alert.present();
  }
  init()
  {
    this.fbs.GetListSchedule().then((res)=>{
      this.ListSchedule = res;
      this.fbs.GetListClass().then((res)=>{
        this.ListClass = res
      })
    })
  }
  // async addForm() {
  //   const alert = await this.alert.create({
  //     cssClass: 'add-form',
  //     header: 'Phân lịch',
  //     inputs: [
  //       {
  //         name: 'id',
  //         type: 'text',
  //         placeholder: 'ID',
  //       },
  //       {
  //         name: 'idobj',
  //         type: 'text',
  //         placeholder: 'ID Mon hoc',
  //       },
  //       {
  //         name: 'max',
  //         type: 'number',
  //         placeholder: 'So luong sv toi da',
  //       },
  //       {
  //         name: 'day',
  //         type: 'number',
  //         placeholder: 'Thứ',
  //       },
  //       {
  //         name: 'lsstart',
  //         type: 'number',
  //         placeholder: 'Tiet bat dau',
  //       },
  //       {
  //         name: 'lsend',
  //         type: 'number',
  //         placeholder: 'Tiet ket thuc',
  //       },
  //       {
  //         name: 'room',
  //         type: 'text',
  //         placeholder: 'Phong hoc',
  //       },
  //       {
  //         name: 'idteacher',
  //         type: "search",
  //         placeholder: 'Tiet ket thuc',
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         cssClass: 'cancel-alert',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Ok',
  //         handler: (res) => {
  //           console.log('Confirm Ok');
  //           this.fbs.Admin_add_object(res.id, res.name, res.tcnumber, res.lsnumber, res.start, res.end).then((mes)=>{
  //             console.log(mes);
  //             this.ngOnInit();
  //           })
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
  // async editForm(id, name, tcnumber, lsnumber, start, end) {
  //   const alert = await this.alert.create({
  //     cssClass: 'edit-form',
  //     header: 'Thay đổi thông tin',
  //     inputs: [
  //       {
  //         name: 'name',
  //         type: 'text',
  //         placeholder: 'Ten mon hoc',
  //         value: name
  //       },
  //       {
  //         name: 'id',
  //         type: 'text',
  //         value:'ID: '+ id,
  //         disabled:true
  //       },
  //       {
  //         name: 'tcnumber',
  //         type: 'text',
  //         placeholder: 'So tin chi',
  //         value: tcnumber
  //       },
  //       {
  //         name: 'lsnumber',
  //         type: 'text',
  //         placeholder: 'So tiet',
  //         value:lsnumber
  //       },
  //       {
  //         name: 'start',
  //         type: 'text',
  //         placeholder: 'Ngay bat dau',
  //         value: start
  //       },
  //       {
  //         name: 'end',
  //         type: 'text',
  //         placeholder: 'Ngay ket thuc',
  //         value: end
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Hủy bỏ',
  //         role: 'cancel',
  //         cssClass: 'cancel-alert',
  //         handler: () => {
  //           console.log('Confirm Cancel');
  //         }
  //       }, {
  //         text: 'Đồng ý',
  //         handler: (res) => {
  //           console.log('Confirm Ok');
  //           this.fbs.Admin_update_object(id, res.name, res.tcnumber, res.lsnumber, res.start, res.end).then((mes)=>{
  //             console.log(mes);
  //           });
  //           this.ngOnInit();
  //           this.success('Cập nhật')
  //           this.init()
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }
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
            this.fbs.Admin_delete_schedule(id).then((mes)=>{
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

  openModalAdd() {
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.add-modal-box').classList.add('active');

  }
  closeModalAdd() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.add-modal-box').classList.remove('active');
  }
  openModalEdit(item) {
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.edit-modal-box').classList.add('active');
    this.IDedit = item.id
    this.txtDay2 = item.day
    this.txtStart2 = item.lsstart
    this.txtEnd2 = item.lsend
    this.txtIDClass2 = item.idclass
  }
  closeModalEdit() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.edit-modal-box').classList.remove('active');
  }
}
