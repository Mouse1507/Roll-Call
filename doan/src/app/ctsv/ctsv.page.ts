import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FbserviceService } from '../service/fbservice.service'
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-ctsv',
  templateUrl: './ctsv.page.html',
  styleUrls: ['./ctsv.page.scss'],
})
export class CtsvPage implements OnInit {

  constructor(private loadingController: LoadingController, private fbs: FbserviceService) { }

  ngOnInit() {
    this.init(this.DATE)
    console.log(this.txtDate);
    
  }
  clickBtn(event) {
    var btnTeacher = document.querySelectorAll(".btn-teacher");
    btnTeacher.forEach(btn => {
      btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
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
  txtDate:any
  date = new Date().getDate()
  month = new Date().getMonth()
  year = new Date().getFullYear()
  DATE = this.date + '-' + this.month + '-' + this.year
  ListShow: any
  ListAttendance: any
  ListObject = []
  init(date) {
    this.fbs.GetInfoByClass().then((res) => {
      this.ListAttendance = res
      var ListObjectID = []
      var listTemp=[]
      console.log(this.ListAttendance);
      this.fbs.GetListClass().then((res) => {
        var classes
        classes = res
        this.ListAttendance.forEach(element => {
          classes.forEach(ele => {
            if (element.id == ele.property.id) {
              ListObjectID.push(ele.property.idobj)
            }
          });
        });
        console.log(ListObjectID);
        this.fbs.GetListObject().then((res) => {
          var list
          list = res

          ListObjectID.forEach(element => {
            list.forEach(ele => {
              if (element == ele.id) {
                this.ListObject.push(ele.name)
              }
            });
          });
          for (let i = 0; i < this.ListAttendance.length; i++) {
            var count = 0

            this.fbs.GetCountbyIDandDay(this.ListAttendance[i].id, date).then((res) => {
              var list
              list = res
              if (list.length > 0) {
                var students
                for (let key in list) {
                  students = list[key]
                }
                console.log(students);
                students.forEach(element => {
                  if (element.check == false) {
                    count++
                  }
                  console.log(element.check);

                });
                listTemp.push({
                  id: this.ListAttendance[i].id,
                  name: this.ListObject[i],
                  count: count
                })
              }


            })

          }
          this.ListShow = listTemp
          console.log(this.ListAttendance);

          console.log(this.ListShow);

        })
      })
    })
  }

  
  selectDate(res){
    console.log(res);
    var date = new Date(res).getDate()
    var month = new Date(res).getMonth()
    var year = new Date(res).getFullYear()
    var DATE = date+'-'+month+'-'+year
    this.init(DATE)
  }

  filterSearch(searchBar) {
    var value = searchBar.currentTarget.value.toUpperCase();
    if (!value) {
      this.init(this.DATE);
      return;
    }
    this.ListShow = this.ListShow.filter(grid => {
      if (grid.name || value) {
        return grid.name.toUpperCase().indexOf(value) > -1;
      }
    });
  }
}

