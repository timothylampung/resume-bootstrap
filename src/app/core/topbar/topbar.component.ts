import {Component} from '@angular/core';


@Component({
  templateUrl : './topbar.component.html',
  styleUrls : ['./topbar.component.scss'],
  selector : 'app-topbar'
})
export class TopbarComponent {
  menuItems: string[] = ['Home', 'Resume', 'Portfolio', 'Blog', 'Contact Me'];

}
