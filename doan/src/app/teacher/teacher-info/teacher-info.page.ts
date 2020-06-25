import { Component, OnInit } from '@angular/core';
import {FbserviceService} from '../../service/fbservice.service'

import { AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.page.html',
  styleUrls: ['./teacher-info.page.scss'],
})
export class TeacherInfoPage implements OnInit {

  constructor(private fbs:FbserviceService, private alert: AlertController) { }

  Teacher: any
  teacherEmail: any
  teacherID: any
  teacherName: any
  txtname:any
  txtemail:any
  ngOnInit() {
    this.fbs.GetCurrentUser().then((res)=>{
      this.teacherEmail = res.email
      console.log(this.teacherEmail);
      var list
      this.fbs.GetListGV().then((res)=>{
        list  = res
        list.forEach(element => {
          console.log(element.email);
          if(element.email == this.teacherEmail){
            this.teacherID = element.id
            this.teacherName = element.name
          }
        });
        console.log(this.teacherID);
      })
    })
  }

  update()
  {
    this.fbs.Admin_update_gv(this.teacherID, this.txtname, this.txtemail).then((mes)=>{
      console.log(this.txtname, this.txtemail);
      
      this.Alert(mes)
    })
  }

  async Alert(mes) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Cập nhật',
      message: mes,
      buttons: [{
        text:'Đóng',
      },
    ]
    });
    await alert.present();
  }

}
