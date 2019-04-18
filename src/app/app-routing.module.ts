import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppshellComponent} from './core/appshell/appshell.component';

const routes: Routes = [
  {path : '', redirectTo : 'resume', pathMatch : 'full'},
  {path : 'resume', component : AppshellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
