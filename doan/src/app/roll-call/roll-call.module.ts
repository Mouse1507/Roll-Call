import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollCallPageRoutingModule } from './roll-call-routing.module';

import { RollCallPage } from './roll-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollCallPageRoutingModule
  ],
  declarations: [RollCallPage]
})
export class RollCallPageModule {}
