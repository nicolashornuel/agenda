import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title?: string;
  @Output() close!: EventEmitter<any>;

  public onClose(): void {
    this.close.emit();
  }
}
