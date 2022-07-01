import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CalendarOptions } from '@fullcalendar/angular';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-unit-board',
  templateUrl: './unit-board.component.html',
  styleUrls: ['./unit-board.component.scss'],
})
export class UnitBoardComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridDay',
    plugins: [timeGridPlugin, interactionPlugin],
    weekends: false,
    //create same events created but for days later
    events: [
      {
        title: 'Unit-Board 1',
        start: '2022-06-29T09:00:00',
        end: '2022-06-29T12:30:00',
      },
      {
        title: 'Unit-Board 2',
        start: '2022-06-29T13:30:00',
        end: '2022-06-29T17:00:00',
      },
      {
        title: 'Unit-Board 3',
        start: '2022-06-30T09:00:00',
        end: '2022-06-30T12:30:00',
      },
      {
        title: 'Unit-Board 4',
        start: '2022-06-30T13:30:00',
        end: '2022-06-30T17:00:00',
      },
    ],
  };

  //init data for 5 unit board with name description and status
  units = [
    {
      name: 'Module 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'In Progress',
    },
    {
      name: 'Module 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'In Progress',
    },
    {
      name: 'Module 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'In Progress',
    },
    {
      name: 'Module 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Finished',
    },
    {
      name: 'Module 5',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      status: 'Finished',
    },
  ];

  constructor(private router: Router) {
    const name = Calendar.name;
  }

  ngOnInit() {}

  toUnitDetail() {
    this.router.navigateByUrl('/unitDetail');
  }
}
