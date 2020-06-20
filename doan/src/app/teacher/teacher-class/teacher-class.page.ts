import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-teacher-class',
  templateUrl: './teacher-class.page.html',
  styleUrls: ['./teacher-class.page.scss'],
})
export class TeacherClassPage implements OnInit {

  constructor(private loadingController: LoadingController) { }

  ngOnInit() {
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
