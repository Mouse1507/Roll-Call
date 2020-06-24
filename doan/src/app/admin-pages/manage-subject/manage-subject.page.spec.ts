import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageSubjectPage } from './manage-subject.page';

describe('ManageSubjectPage', () => {
  let component: ManageSubjectPage;
  let fixture: ComponentFixture<ManageSubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSubjectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageSubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
