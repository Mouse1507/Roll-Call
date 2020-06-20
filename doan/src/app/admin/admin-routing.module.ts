import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'teacher',
        loadChildren: () => import('./manage-teacher/manage-teacher.module').then( m => m.ManageTeacherPageModule)
      },
      {
        path: 'class',
        loadChildren: () => import('./manage-class/manage-class.module').then( m => m.ManageClassPageModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./manage-student/manage-student.module').then( m => m.ManageStudentPageModule)
      },
      {
        path: 'subject',
        loadChildren: () => import('./manage-subject/manage-subject.module').then( m => m.ManageSubjectPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./manage-teacher/manage-teacher.module').then( m => m.ManageTeacherPageModule)
      },{
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
      }
    ]
  },
  {
    path: 'home',
    component :HomePage
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
