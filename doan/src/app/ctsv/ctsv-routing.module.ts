import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtsvPage } from './ctsv.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: CtsvPage,
    children: [
      {
        path: 'ctrl-class',
        loadChildren: () => import('./ctrl-class/ctrl-class.module').then( m => m.CtrlClassPageModule)
      },
      {
        path: 'ctrl-subject',
        loadChildren: () => import('./ctrl-subject/ctrl-subject.module').then( m => m.CtrlSubjectPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./ctrl-class/ctrl-class.module').then( m => m.CtrlClassPageModule)
      }
    ]
  },
  {
    path: 'home',
    component: HomePage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CtsvPageRoutingModule {}
