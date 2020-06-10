import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollCallPage } from './roll-call.page';

const routes: Routes = [
  {
    path: '',
    component: RollCallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollCallPageRoutingModule {}
