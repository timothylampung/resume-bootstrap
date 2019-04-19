import {NgModule} from '@angular/core';
import {BootstrapModule} from '../bootstrap.module';
import {HomeComponent} from './home/home.component';
import {AboutMe} from './home/about-me';
import {ResumeComponent} from './resume/resume.component';
import {SkillbarComponent} from './resume/skillbar/skillbar.component';

@NgModule({
  entryComponents: [],
  imports: [BootstrapModule],
  exports: [],
  declarations: [
    HomeComponent,
    ResumeComponent,
    SkillbarComponent,
    AboutMe],
  providers: [],
  bootstrap: []
})
export class ResumeModule {

}
