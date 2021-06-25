import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home2Component } from './home2/home2.component';

const routes: Routes = [
  {
    path: 'home',
    component: Home2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2RoutingModule {}