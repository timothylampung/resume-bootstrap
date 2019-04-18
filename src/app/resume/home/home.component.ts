import {Component} from '@angular/core';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';

@Component({
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  selector: 'app-home'
})
export class HomeComponent {
  images: string[] = [
    '/assets/images/edited.jpg',
    '/assets/images/foggy_forest_01_by_sacral_stock-d74yjpg.jpg',
    '/assets/images/SAM_2457.jpg'
  ];
  faCoffee = faCoffee;

}
