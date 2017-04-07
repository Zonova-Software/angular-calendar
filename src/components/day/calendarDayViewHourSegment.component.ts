import { Component, Input, TemplateRef } from '@angular/core';
import { DayViewHourSegment } from 'calendar-utils';

@Component({
  selector: 'mwl-calendar-day-view-hour-segment',
  template: `
    <ng-template #defaultTemplate>
      <div
        class="cal-hour-segment"
        [class.cal-hour-start]="segment.isStart"
        [class.cal-after-hour-start]="!segment.isStart"
        [ngClass]="segment.cssClass">
        <div class="cal-time">
          {{ segment.date | calendarDate:'dayViewHour':locale }}
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        segment: segment,
        locale: locale
      }">
    </ng-template>
  `
})
export class CalendarDayViewHourSegmentComponent {

  @Input() segment: DayViewHourSegment;

  @Input() locale: string;

  @Input() customTemplate: TemplateRef<any>;

}