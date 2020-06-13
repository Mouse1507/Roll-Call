import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageTeacherPageRoutingModule } from './manage-teacher-routing.module';

import { ManageTeacherPage } from './manage-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageTeacherPageRoutingModule
  ],
  declarations: [ManageTeacherPage]
})
export class ManageTeacherPageModule {}
