import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '@shared/abstracts/input.component';
import { FieldSet } from '@shared/models/tableSet.interface';

@Component({
  selector: 'app-input-textarea-with-label',
  templateUrl: './input-textarea-with-label.component.html',
  styleUrls: ['./input-textarea-with-label.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextareaWithLabelComponent),
      multi: true
    }
  ]
})
export class InputTextareaWithLabelComponent extends AbstractInputComponent {
  @Input() data!: FieldSet;

  get asterix(): string {
    return this.inputRequired ? ' *' : '';
  }
}
