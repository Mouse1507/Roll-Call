import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CtsvPageRoutingModule } from './ctsv-routing.module';

import { CtsvPage } from './ctsv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CtsvPageRoutingModule
  ],
  declarations: [CtsvPage]
})
export class CtsvPageModule {}
