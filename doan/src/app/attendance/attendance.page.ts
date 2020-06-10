import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  checkStudent(x){
    x.currentTarget.classList.toggle('active');
  }
}
