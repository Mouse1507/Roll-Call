import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {FbserviceService} from '../../service/fbservice.service'
@Component({
  selector: 'app-teacher-class',
  templateUrl: './teacher-class.page.html',
  styleUrls: ['./teacher-class.page.scss'],
})
export class TeacherClassPage implements OnInit {

  constructor(private loadingController: LoadingController, private fbs:FbserviceService) { }

  ListSchedule=[]
  teacherID: any
  teacherEmail: any
  ListObjectID=[]
  ListObject = []
  ListClass=[]
  ListShow=[]
  ListRoom=[]
  ListDay=[]
  ListStart=[]
  ListEnd=[]
  Class:any
  Show:{
    id:any,
    object:any,
    max:any,
    room:any,
    start:any,
    end:any,
    day:any
  }
  ngOnInit() {
    this.init()
    
    
  }
  init(){
    this.fbs.GetCurrentUser().then((res)=>{
      this.teacherEmail = res.email
      console.log(this.teacherEmail);
      var list
      this.fbs.GetListGV().then((res)=>{
        list  = res
        list.forEach(element => {
          if(element.email == this.teacherEmail){
            this.teacherID = element.id
          }
        });
        console.log(this.teacherID);
        this.fbs.GetListSchedule().then((res)=>{
          var Schedules
          Schedules = res
          Schedules.forEach(element => {
            if(element.idteacher == this.teacherID){
              this.ListSchedule.push(element)
            }
          });
          console.log(this.ListSchedule);
          
        })
        this.fbs.GetListClass().then((res)=>{
          this.Class = res
          this.ListSchedule.forEach(element => {
            this.Class.forEach(ele => {
              if(ele.property.id == element.idclass){
                this.ListObjectID.push(ele.property.idobj)
                this.ListRoom.push(element.room)
                this.ListClass.push(ele.property.id)
                this.ListDay.push(element.day)
                this.ListStart.push(element.lsstart)
                this.ListEnd.push(element.lsend)
              }
            });
          });
          console.log(this.ListObjectID);
          
        })
        this.fbs.GetListObject().then((res)=>{
          var Objects
          Objects = res
          this.ListObjectID.forEach(element => {
            Objects.forEach(ele => {
              if(ele.id == element){
                this.ListObject.push(ele.name)
              }
            });
          });
          console.log(this.ListObject);
          console.log(this.ListRoom);
          var day = new Date().getDay()
          for(let i=0; i<this.ListClass.length; i++){
            if(day == this.ListDay[i]){
              this.ListShow.push({id:this.ListClass[i], object: this.ListObject[i], max:this.Class[i].property.max, room: this.ListRoom[i], day: this.ListDay[i], start: this.ListStart[i], end: this.ListEnd[i] })
            } 
          }
          console.log(this.ListClass);
          
          console.log(this.ListShow);
          console.log(new Date().getDay());
        })
      })
    })
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Đợi một chút',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  filterSearch(searchBar) {
    var value = searchBar.currentTarget.value.toUpperCase();
    if (!value) {
      this.init();
      return;
    }
    this.ListShow = this.ListShow.filter(grid => {
      if (grid.object || value) {
        return grid.object.toUpperCase().indexOf(value) > -1;
      }
    });
  }
}
