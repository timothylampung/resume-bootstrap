import {Component} from '@angular/core';


@Component({
  templateUrl : './appshell.component.html',
  styleUrls : ['./appshell.component.scss'],
  selector : 'app-appshell'
})
export class AppshellComponent {
  menuItems: string[] = ['Home', 'Resume', 'Portfolio', 'Blog', 'Contact Us'];

}
