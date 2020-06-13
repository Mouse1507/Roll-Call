import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherInfoPage } from './teacher-info.page';

describe('TeacherInfoPage', () => {
  let component: TeacherInfoPage;
  let fixture: ComponentFixture<TeacherInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
