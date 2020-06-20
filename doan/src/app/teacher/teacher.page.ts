import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

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
