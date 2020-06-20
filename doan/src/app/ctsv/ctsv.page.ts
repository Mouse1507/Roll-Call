import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ctsv',
  templateUrl: './ctsv.page.html',
  styleUrls: ['./ctsv.page.scss'],
})
export class CtsvPage implements OnInit {

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
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
}
