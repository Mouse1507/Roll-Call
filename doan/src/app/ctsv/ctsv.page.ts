import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctsv',
  templateUrl: './ctsv.page.html',
  styleUrls: ['./ctsv.page.scss'],
})
export class CtsvPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  clickBtn(event) {
    var btnTeacher = document.querySelectorAll(".btn-teacher");
    btnTeacher.forEach(btn => {
      btn.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
  }
}
