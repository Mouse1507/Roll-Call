import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'teacher',
        loadChildren: () => import('../admin-pages/manage-teacher/manage-teacher.module').then( m => m.ManageTeacherPageModule)
      },
      {
        path: 'class',
        loadChildren: () => import('../admin-pages/manage-class/manage-class.module').then( m => m.ManageClassPageModule)
      },
      {
        path: 'student',
        loadChildren: () => import('../admin-pages/manage-student/manage-student.module').then( m => m.ManageStudentPageModule)
      },
      {
        path: 'subject',
        loadChildren: () => import('../admin-pages/manage-subject/manage-subject.module').then( m => m.ManageSubjectPageModule)
      },
      {
        path: '',
        loadChildren: () => import('../admin-pages/manage-teacher/manage-teacher.module').then( m => m.ManageTeacherPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
