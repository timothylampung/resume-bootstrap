import {Component} from '@angular/core';


@Component({
  templateUrl : './sidenav.component.html',
  styleUrls : ['./sidenav.component.scss'],
  selector : 'app-sidenav'
})
export class SidenavComponent {
  menuItems: string[] = ['Home', 'Resume', 'Portfolio', 'Blog', 'Contact Us'];

}
