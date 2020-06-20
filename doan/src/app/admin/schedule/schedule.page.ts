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
  ListRoomFree: any
  ListSchedule:any
  ngOnInit() {
    this.init()
    // this.fbs.GetFreeTeacher('1', '7', '9').then((res)=>{
    //   console.log(res);
      
    // })
    // this.fbs.GetListUsed().then((res)=>{
    //   this.ListRoomFree=[]
    //   this.ListUsed = res
    //   this.ListRoom.forEach(room => {
    //     var check = true
    //     this.ListUsed.forEach(element => {
          // if ( element.id == room && element.day == this.day) {
          //   if(( (parseInt(element.end) > parseInt(this.lsstart) && parseInt(element.end) <= parseInt(this.lsend)) 
          //   || (parseInt(element.start) >= parseInt(this.lsstart) && parseInt(element.start) < parseInt(this.lsend)) )){
          //     check = false
          //   }
          // }
    //       console.log('check ne:' +check + '    end:' + element.end);
          
    //     });
        // if(check){
        //   this.ListRoomFree.push(room)
        // }
    //   })
    //   console.log(this.ListRoomFree);
      
    // })
    
    
    
  }

  async showInfo(id, idobj, idteacher, max, day, lsstart, lsend, room)
  {
    var dayy = parseInt(day)+1;
    const alert = await this.alert.create({
      header: 'Infor',
      inputs:[
        {
          disabled:true,
          value: 'ID: '+ id
        },
        {
          disabled:true,
          value: 'ID mon hoc: '+ idobj
        },
        {
          disabled:true,
          value: 'ID giao vien : '+ idteacher
        },
        {
          disabled:true,
          value: 'So luong toi da : '+ max
        },
        {
          disabled:true,
          value: 'Thứ: '+ dayy
        },
        {
          disabled:true,
          value: 'Tiet bat dau: '+ lsstart
        },
        {
          disabled:true,
          value: 'Tiet ket thuc: '+ lsend
        },
        {
          disabled:true,
          value: 'Phong hoc: '+ room
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

  openModalAdd() {
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.add-modal-box').classList.add('active');

  }
  closeModalAdd() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.add-modal-box').classList.remove('active');
  }
  openModalEdit() {
    document.querySelector('.overlay').classList.add('active');
    document.querySelector('.edit-modal-box').classList.add('active');

  }
  closeModalEdit() {
    document.querySelector('.overlay').classList.remove('active');
    document.querySelector('.edit-modal-box').classList.remove('active');
  }
}
