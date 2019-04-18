import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  selector: 'app-sidenav'
})
export class SidenavComponent {
  menuItems: { css: string, name: string, url?: string }[] =
    [
      {name: 'Home', css: 'fab fa-linkedin', url: '/resume/home'},
      {name: 'Resume', css: 'fab fa-linkedin', url: '/resume/resume'},
      {name: 'Profile', css: 'fab fa-linkedin', url: '/resume/profile'},
      {name: 'Contact Us', css: 'fab fa-linkedin', url: '/resume/contact-us'}
    ];

  constructor(private router: Router) {}

  navigate(nav: { css: string, name: string, url?: string }) {
    console.log(nav)
    this.router.navigate([nav.url]);
  }

}
