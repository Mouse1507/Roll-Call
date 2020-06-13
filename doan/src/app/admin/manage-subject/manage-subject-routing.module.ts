import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSubjectPage } from './manage-subject.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSubjectPageRoutingModule {}
