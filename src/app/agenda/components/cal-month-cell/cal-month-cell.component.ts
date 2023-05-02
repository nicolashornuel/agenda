import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {CalendarEvent, CalendarMonthViewDay} from 'angular-calendar';
import {EventService} from 'src/app/core/services/event.service';

@Component({
  selector: 'app-cal-month-cell',
  templateUrl: './cal-month-cell.component.html',
  styleUrls: ['./cal-month-cell.component.scss']
})
export class CalMonthCellComponent implements OnInit, OnChanges {
  @Input() day!: CalendarMonthViewDay;
  @Input() locale!: string;
  @Input() isLocked!: boolean;
  formGroup: FormGroup = new FormGroup({});

  public emptyFields = [
    {
      title: 'JOUR',
      name: 'jour',
      display: (_day: CalendarMonthViewDay) => true
    },
    {
      title: 'NUIT',
      name: 'nuit',
      display: (_day: CalendarMonthViewDay) => true
    },
    {
      title: 'Nounou',
      name: 'nounou',
      display: (day: CalendarMonthViewDay) => !day.isWeekend
    },
    {
      title: 'GM',
      name: 'garderie-matin',
      display: (day: CalendarMonthViewDay) => day.day != 3 && !day.isWeekend && day.cssClass !== 'holiday'
    },
    {
      title: 'C',
      name: 'cantine',
      display: (day: CalendarMonthViewDay) => day.day != 3 && !day.isWeekend && day.cssClass !== 'holiday'
    },
    {
      title: 'GS',
      name: 'garderie-soir',
      display: (day: CalendarMonthViewDay) => day.day != 3 && !day.isWeekend && day.cssClass !== 'holiday'
    },
    {
      title: 'CLSH',
      name: 'centre-loisir',
      display: (day: CalendarMonthViewDay) => day.day == 3 || (!day.isWeekend && day.cssClass == 'holiday')
    }
  ];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLocked'] && !changes['isLocked'].isFirstChange()) {
      changes['isLocked'].currentValue ? this.formGroup.disable() : this.formGroup.enable();
    }
  }

  private buildForm(): void {
    console.log(this.day.date, this.day.events.length);
    
    
    this.emptyFields.forEach(field => {
      if (field.display(this.day)) this.formGroup.addControl(field.name, new FormControl(false));

      this.day.events.forEach(dayEvent => {
        if (dayEvent.meta == field.name) {
          this.formGroup.addControl(field.name, new FormControl(true))
        } 
        //console.log(dayEvent.meta, field.name);
      })
    });
    this.formGroup.disable();
  }

  public onCheck({key, value}: {key: string; value: AbstractControl}): void {    
    if (value.value) {
      const targetEvent: {title: string; name: string} | undefined = this.emptyFields
        .map(field => ({name: field.name, title: field.title}))
        .find(field => field.name === key);
      if (targetEvent) {
        const newEvent: CalendarEvent = {
          start: this.day.date,
          title: targetEvent!.title,
          meta: targetEvent!.name
        };
        const fireEvent: DocumentData = {
          start: this.day.date.getTime(),
          title: targetEvent!.title,
          meta: targetEvent!.name
        }
        /* this.eventService.save(fireEvent).then(() => {
          this.day.events.push(newEvent);
          console.log('ok');
        }); */
      }
    }
  }
}
