import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RollCallPage } from './roll-call.page';

describe('RollCallPage', () => {
  let component: RollCallPage;
  let fixture: ComponentFixture<RollCallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollCallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RollCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
