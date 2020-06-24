import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSubjectPageRoutingModule } from './manage-subject-routing.module';

import { ManageSubjectPage } from './manage-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSubjectPageRoutingModule
  ],
  declarations: [ManageSubjectPage]
})
export class ManageSubjectPageModule {}
