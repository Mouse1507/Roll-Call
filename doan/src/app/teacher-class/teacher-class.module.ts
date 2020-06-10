import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherClassPageRoutingModule } from './teacher-class-routing.module';

import { TeacherClassPage } from './teacher-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherClassPageRoutingModule
  ],
  declarations: [TeacherClassPage]
})
export class TeacherClassPageModule {}
