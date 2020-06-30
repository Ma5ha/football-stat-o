import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteModule } from '../delete/delete.module';
import { TableModule } from '../table/table.module';


@NgModule({
  declarations: [NavComponent, LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    DeleteModule,
    TableModule
  ],
  exports: [NavComponent, LayoutComponent, FooterComponent,]
})
export class SharedModule { }
