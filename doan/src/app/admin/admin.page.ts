import { Component, OnInit } from '@angular/core';
import {FbserviceService} from '../service/fbservice.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private fbs:FbserviceService) { }

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
  }
}
