import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtrlClassPage } from './ctrl-class.page';

describe('CtrlClassPage', () => {
  let component: CtrlClassPage;
  let fixture: ComponentFixture<CtrlClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtrlClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtrlClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
