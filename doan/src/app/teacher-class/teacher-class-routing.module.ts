import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherClassPage } from './teacher-class.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherClassPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherClassPageRoutingModule {}
