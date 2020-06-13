import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtrlClassPageRoutingModule } from './ctrl-class-routing.module';

import { CtrlClassPage } from './ctrl-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtrlClassPageRoutingModule
  ],
  declarations: [CtrlClassPage]
})
export class CtrlClassPageModule {}
