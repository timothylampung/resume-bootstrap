import {Component, Input} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';


export interface TimeSet {
  year?: number;
  content?: string;
  position : string;
}


@Component({
  styleUrls: ['./timeline.component.scss'],
  templateUrl: './timeline.component.html',
  selector: 'app-timeline'
})
export class TimelineComponent {
  @Input() title : string;
  @Input() timeSets : TimeSet[] = [];


}
