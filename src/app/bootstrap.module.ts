import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

export const BOOTSTRAP_MODULES = [
  NgbModule,
  NgbAlertModule
];

@NgModule({
  entryComponents: [],
  imports: [CommonModule, AppRoutingModule,
    FormsModule, BOOTSTRAP_MODULES],
  exports: [CommonModule, AppRoutingModule,
    FormsModule, BOOTSTRAP_MODULES],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class BootstrapModule {

}
