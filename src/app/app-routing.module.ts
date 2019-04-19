import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppshellComponent} from './core/appshell/appshell.component';
import {HomeComponent} from './resume/home/home.component';
import {ResumeComponent} from './resume/resume/resume.component';

const routes: Routes = [
  {path : '', redirectTo : 'resume', pathMatch : 'full'},
  {path : 'resume', component : AppshellComponent,
    children: [
      {path : '', redirectTo : 'home', pathMatch : 'full'},
      {path : 'home', component : HomeComponent},
      {path : 'resume', component : ResumeComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
