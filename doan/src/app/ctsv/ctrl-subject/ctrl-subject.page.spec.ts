import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtrlSubjectPage } from './ctrl-subject.page';

describe('CtrlSubjectPage', () => {
  let component: CtrlSubjectPage;
  let fixture: ComponentFixture<CtrlSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrlSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtrlSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
