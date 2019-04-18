import {Component} from '@angular/core';


@Component({
  templateUrl: './appshell.component.html',
  styleUrls: ['./appshell.component.scss'],
  selector: 'app-appshell'
})
export class AppshellComponent {

  toggleSideBar = true;
  sideBarCss = 'col-md-9 ml-sm-auto col-lg-10 px-4';

  onToggle(event) {
    this.toggleSideBar = event;
    if (event) {
      this.sideBarCss = 'col-md-9 ml-sm-auto col-lg-10 px-4';
    } else {
      this.sideBarCss = 'col-md-12 ml-sm-auto col-lg-10 px-4';
    }
  }

}
