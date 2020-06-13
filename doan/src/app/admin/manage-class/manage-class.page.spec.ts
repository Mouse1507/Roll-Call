import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageClassPage } from './manage-class.page';

describe('ManageClassPage', () => {
  let component: ManageClassPage;
  let fixture: ComponentFixture<ManageClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
