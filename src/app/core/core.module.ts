import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav/sidenav.component';
import {BootstrapModule} from '../bootstrap.module';
import {TopbarComponent} from './topbar/topbar.component';
import {AppshellComponent} from './appshell/appshell.component';


@NgModule({
  entryComponents : [],
  imports : [BootstrapModule],
  exports : [],
  declarations : [SidenavComponent, TopbarComponent, AppshellComponent],
  providers : [],
  bootstrap : []
})
export class CoreModule {}
