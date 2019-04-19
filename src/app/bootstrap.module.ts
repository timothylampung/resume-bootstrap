import {NgModule} from '@angular/core';
import {NgbAlertModule, NgbCarouselModule, NgbModule, NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

export const BOOTSTRAP_MODULES = [
  NgbModule,
  NgbAlertModule,
  NgbCarouselModule,
  NgbProgressbarModule
];

@NgModule({
  entryComponents: [],
  imports: [CommonModule, FontAwesomeModule, AppRoutingModule,
    FormsModule, BOOTSTRAP_MODULES],
  exports: [CommonModule, FontAwesomeModule, AppRoutingModule,
    FormsModule, BOOTSTRAP_MODULES],
  declarations: [],
  providers: [],
  bootstrap: []
})
export class BootstrapModule {

}
