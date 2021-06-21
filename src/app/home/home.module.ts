import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    HomeComponent,
    AngularComponent,
    NavigationComponent,
    BannerComponent,
    FooterComponent,
    ProjectComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
