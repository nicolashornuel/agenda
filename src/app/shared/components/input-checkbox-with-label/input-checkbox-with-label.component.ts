import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '@shared/abstracts/input.component';
import { FieldSet } from '@shared/models/tableSet.interface';

@Component({
  selector: 'app-input-checkbox-with-label',
  templateUrl: './input-checkbox-with-label.component.html',
  styleUrls: ['./input-checkbox-with-label.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputCheckboxWithLabelComponent),
      multi: true
    }
  ]
})
export class InputCheckboxWithLabelComponent extends AbstractInputComponent {
  @Input() data!: FieldSet;

  get asterix(): string {
    return this.inputRequired ? ' *' : '';
  }

  public log(value: string) {
    console.log(value);
    
  }
}
