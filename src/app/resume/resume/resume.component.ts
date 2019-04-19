import {Component} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {SkillSet} from './skillbar/skillbar.component';

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
  faCoffee = faCoffee;

}
