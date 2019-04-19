import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';


export interface SkillSet {
  type?: string;
  currentValue: number;
  title: string
}
@Component({
  styleUrls: ['./skillbar.component.scss'],
  templateUrl: './skillbar.component.html',
  selector: 'app-skillbar'
})
export class SkillbarComponent {

  @Input() currentValue: number = 0;
  @Input() title: string = '';
  @Input() type : string = 'info';
  @Output() emitter = new EventEmitter<string>()

}
