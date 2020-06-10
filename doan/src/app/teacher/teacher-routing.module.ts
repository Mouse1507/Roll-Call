import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPage } from './teacher.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage,
    children: [
      {
        path: 'info',
        loadChildren: () => import('../teacher-info/teacher-info.module').then( m => m.TeacherInfoPageModule)
      },
      {
        path: 'class',
        loadChildren: () => import('../teacher-class/teacher-class.module').then( m => m.TeacherClassPageModule)
      },
      {
        path: '',
        loadChildren: () => import('../teacher-info/teacher-info.module').then( m => m.TeacherInfoPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPageRoutingModule {}
