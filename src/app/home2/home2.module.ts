import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home2RoutingModule } from './home2-routing.module';
import { Home2Component } from './home2/home2.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner/banner.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
// import { NavigationComponent } from '../shared/navigation/navigation.component';

@NgModule({
  declarations: [Home2Component, BannerComponent, ProjectComponent, ServiceComponent],
  imports: [CommonModule, Home2RoutingModule, SharedModule],
})
export class Home2Module {}
