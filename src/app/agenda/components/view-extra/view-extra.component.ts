import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CalendarMonthViewDay } from 'angular-calendar';

@Component({
  selector: 'app-view-extra',
  templateUrl: './view-extra.component.html',
  styleUrls: ['./view-extra.component.scss']
})
export class ViewExtraComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.viewDate);
  }
  ngOnInit(): void {

  }
  @Input() viewDate!: any;
  @Input() locale!: string;

}
