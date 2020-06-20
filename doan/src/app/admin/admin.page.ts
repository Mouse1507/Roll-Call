import { Component, OnInit } from '@angular/core';
import {FbserviceService} from '../service/fbservice.service'
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private fbs:FbserviceService,public loadingController: LoadingController) { }

  ngOnInit() {
  }
  clickBtn(event) {
    var btnTeacher = document.querySelectorAll(".btn-admin");
    btnTeacher.forEach(btn => {
      btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  }

  logout()
  {
    this.fbs.Logout().then((res)=>{
      console.log(res);
    });
    this.presentLoading();
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
}
