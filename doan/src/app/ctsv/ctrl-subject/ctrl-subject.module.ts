import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtrlSubjectPageRoutingModule } from './ctrl-subject-routing.module';

import { CtrlSubjectPage } from './ctrl-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtrlSubjectPageRoutingModule
  ],
  declarations: [CtrlSubjectPage]
})
export class CtrlSubjectPageModule {}
