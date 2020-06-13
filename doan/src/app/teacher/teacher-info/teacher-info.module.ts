import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherInfoPageRoutingModule } from './teacher-info-routing.module';

import { TeacherInfoPage } from './teacher-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherInfoPageRoutingModule
  ],
  declarations: [TeacherInfoPage]
})
export class TeacherInfoPageModule {}
