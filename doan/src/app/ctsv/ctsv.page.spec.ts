import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CtsvPage } from './ctsv.page';

describe('CtsvPage', () => {
  let component: CtsvPage;
  let fixture: ComponentFixture<CtsvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtsvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CtsvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
