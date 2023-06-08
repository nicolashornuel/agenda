import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonComponent } from './components/button/button.component';
import { InputCheckboxComponent, InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopoverComponent } from './components/popover/popover.component';
import { PriorityComponent } from './components/priority/priority.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TableCellHeaderComponent } from './components/table-cell-header/table-cell-header.component';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableCheckboxComponent } from './components/table-checkbox/table-checkbox.component';
import { TableInputComponent } from './components/table-input/table-input.component';
import { TableComponent } from './components/table/table.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { ModalDirective } from './directives/modal.directive';
import { PopoverDirective } from './directives/popover.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { AbstractNgModelComponent } from './abstracts/ng-model.component';
import { AbstractInputComponent } from './abstracts/input.component';
import { LayoutComponent } from './components/layout/layout.component';

const sharedComponents = [
  TableComponent,
  TableCellComponent,
  InputComponent,
  InputCheckboxComponent,
  PriorityComponent,
  SelectComponent,
  TextareaComponent,
  ButtonComponent,
  SpinnerComponent,
  TableCellHeaderComponent,
  AlertComponent,
  TooltipComponent,
  NavbarComponent,
  PopoverComponent,
  TableInputComponent,
  TableCheckboxComponent,
  LayoutComponent,
  AbstractNgModelComponent,
  AbstractInputComponent
]

const sharedModules = [
  ReactiveFormsModule,
  FormsModule,
  RouterModule
]

const sharedDirectives = [
  TooltipDirective,
  PopoverDirective
]

@NgModule({
  declarations: [
    sharedComponents,
    sharedDirectives,
    ModalComponent,
    ModalDirective
  ],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [
    sharedComponents,
    sharedModules,
    sharedDirectives
  ]
})
export class SharedModule { }
