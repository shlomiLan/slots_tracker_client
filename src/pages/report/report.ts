import {Component} from '@angular/core';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})

export class ReportPage {
  constructor() {
  }

  static get_title(): string {
    return 'Report';
  }

  static get_icon(): string {
    return 'report';
  }

}



