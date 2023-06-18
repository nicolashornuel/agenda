import {
  AfterViewInit,
  Component,
  ComponentRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColumnSet, FieldComponent } from '../../models/tableSet.interface';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() columnSet!: ColumnSet;
  @Input() rowData?: any;
  @Input() readonly?: boolean;
  @Input() parentForm?: NgForm;
  @ViewChild('custom', {read: ViewContainerRef}) target!: ViewContainerRef;
  private childComponent!: ComponentRef<any>;  

  constructor(public alert: AlertService) {}

  ngAfterViewInit(): void {
    if (this.columnSet.type === 'custom') this.loadComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['readonly'] && this.childComponent) {
      this.childComponent.instance.readonly = changes['readonly'].currentValue;
    }
  }

  ngOnDestroy(): void {
    if (this.childComponent) {
      this.target.remove();
    }
  }

  private loadComponent(): void {
    console.log('table-cell custom');
    if (this.columnSet.render) {
      this.childComponent = this.target.createComponent<FieldComponent>(this.columnSet.render.component);
      this.childComponent.instance.data = this.columnSet.render.valuePrepare(this.rowData, this.columnSet);
      this.childComponent.instance.readonly = this.readonly;
      this.childComponent.instance.parentForm = this.parentForm; 
      this.childComponent.changeDetectorRef.detectChanges();
    }
  }

}
