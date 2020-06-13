import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtrlSubjectPage } from './ctrl-subject.page';

const routes: Routes = [
  {
    path: '',
    component: CtrlSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtrlSubjectPageRoutingModule {}
