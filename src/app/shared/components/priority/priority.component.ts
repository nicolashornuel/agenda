import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, QueryList, ViewChildren, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractInputComponent } from '@shared/abstracts/input.component';
import { FieldSet } from '@shared/models/tableSet.interface';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriorityComponent),
      multi: true
    }
  ]
})
export class PriorityComponent extends AbstractInputComponent implements AfterViewInit {

  @Input() data!: FieldSet;
  public ratingArr: number[] = [0,1,2];

  @ViewChildren('star') starList!: QueryList<ElementRef>;

  constructor(private cdRef:ChangeDetectorRef) {
    super();
  }
  
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onClick(rating:number): void {    
    this.data.value = rating;    
    this.onBlur.next()
  }

  onPreview(rating: number): void {
    for (let i = 0; i < rating; i++) {
      console.log(this.starList.get(i));
      console.log(this.starList.get(i)?.nativeElement); 
    }
    
  }

  showIcon(index:number): string {    
    return this.data.value as number >= index + 1 ? 'fa-solid fa-star' : 'fa-regular fa-star';
  }
}
