import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

import { EventService } from './services/event.service';
import { HolidayService } from './services/holiday.service';
import { ModalDirective } from './directives/modal.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    ModalDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports: [NavbarComponent],
  providers: [EventService, HolidayService]
})
export class CoreModule { }
