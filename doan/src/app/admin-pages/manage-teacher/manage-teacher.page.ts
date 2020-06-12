import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.page.html',
  styleUrls: ['./manage-teacher.page.scss'],
})
export class ManageTeacherPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  clickBtn(event) {
    document.querySelector('.btn-teacher.active').classList.remove('active');
    event.currentTarget.classList.add('active');
  }
}