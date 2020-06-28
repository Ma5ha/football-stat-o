import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavComponent, LayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  exports: [NavComponent, LayoutComponent]
})
export class SharedModule { }
