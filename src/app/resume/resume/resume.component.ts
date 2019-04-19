import {Component} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {SkillSet} from './skillbar/skillbar.component';
import {TimeSet} from './timeline/timeline.component';

@Component({
  styleUrls: ['./resume.component.scss'],
  templateUrl: './resume.component.html',
  selector: 'app-resume'
})
export class ResumeComponent {

  skillSets: SkillSet[] = [
    {title : 'Angular 7', currentValue : 80, type : 'info'},
    {title : 'Bootstrap', currentValue : 70, type : 'warning'},
    {title : 'PHP Laravel', currentValue : 45, type : 'success'},
    {title : 'PostgreSQL', currentValue : 86, type : 'info'},
  ];

  timeSets : TimeSet[] = [
    {content : 'Working as a software developer at canang technologies',year : 2007, position : 'left'},
    {content : 'This is cool1!',year : 2008, position : 'right'},
    {content : 'This is cool2!',year : 2009, position : 'left'},
    {content : 'This is cool3!',year : 2010, position : 'right'},
    {content : 'This is cool4!',year : 2011, position : 'left'},
  ];

  faCoffee = faCoffee;

}
