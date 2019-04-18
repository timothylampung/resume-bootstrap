import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  templateUrl : './topbar.component.html',
  styleUrls : ['./topbar.component.scss'],
  selector : 'app-topbar'
})
export class TopbarComponent {
  menuItems: string[] = ['Home', 'Resume', 'Portfolio', 'Blog', 'Contact Me'];
  @Output() toggleSideBar = new EventEmitter<boolean>();
  @Input() isToggle = false;
}
