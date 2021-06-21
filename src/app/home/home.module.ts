import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from '../shared/navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProjectComponent } from './project/project.component';
import { TrialComponent } from './trial/trial.component';
import { ExpertiseComponent } from './expertise/expertise.component';

@NgModule({
  declarations: [
    HomeComponent,

    NavigationComponent,
    BannerComponent,
    FooterComponent,
    ProjectComponent,
    TrialComponent,
    ExpertiseComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
