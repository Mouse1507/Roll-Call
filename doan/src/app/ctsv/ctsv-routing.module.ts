import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CtsvPage } from './ctsv.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: CtsvPage,
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
