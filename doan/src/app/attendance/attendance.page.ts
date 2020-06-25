import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router'
import {
  FbserviceService
} from '../service/fbservice.service'
import {
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  constructor(private router: Router, private fbs: FbserviceService, private active: ActivatedRoute, public alert: AlertController) {}
  ListStudent: any
  attendance = []
  ID: any
  ngOnInit() {
    this.init()
  }
  init() {
    this.active.paramMap.subscribe((res) => {
      this.ID = res.get('id')
      this.fbs.GetListStudentInClass(this.ID).then((res) => {
        var list
        list = res
        list.forEach(element => {
          this.attendance.push({
            name: element.name,
            idsv: element.idsv,
            check: false
          })
        });
        console.log(this.attendance);

      })
    })
  }
  checkStudent(x, idsv) {
    x.currentTarget.classList.toggle('active');
    this.attendance.forEach(element => {
      if (element.idsv == idsv) {
        element.check = !element.check
      }
    });
    console.log(this.attendance);
  }

  end() {
    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var DATE = date + '-' + month + '-' + year;
    this.fbs.Add_Attendance(this.ID, DATE, this.attendance);
    this.router.navigateByUrl('teacher/class');
  }
  async endAttend() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Xác nhận',
      message: 'Bạn có muốn kết thúc điểm danh',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.end();
          }
        }
      ]
    });

    await alert.present();
  }

}