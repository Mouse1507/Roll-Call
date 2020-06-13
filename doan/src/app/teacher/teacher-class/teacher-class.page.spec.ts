import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TeacherClassPage } from './teacher-class.page';

describe('TeacherClassPage', () => {
  let component: TeacherClassPage;
  let fixture: ComponentFixture<TeacherClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
