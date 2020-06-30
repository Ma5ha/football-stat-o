import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyPageComponent } from './delete/dummy-page/dummy-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
