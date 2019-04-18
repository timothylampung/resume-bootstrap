import {Component} from '@angular/core';

@Component({
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  selector: 'app-sidenav'
})
export class SidenavComponent {
  menuItems: { css: string, name: string }[] =
    [
      {name: 'Home', css: 'fab fa-linkedin'},
      {name: 'Resume', css: 'fab fa-linkedin'},
      {name: 'Profile', css: 'fab fa-linkedin'},
      {name: 'Contact Us', css: 'fab fa-linkedin'}
    ];

}
