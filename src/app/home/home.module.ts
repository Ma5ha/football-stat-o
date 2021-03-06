import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './home-page/card/card.component'


@NgModule({
  declarations: [HomePageComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BrowserAnimationsModule,
  ]
})
export class HomeModule { }
