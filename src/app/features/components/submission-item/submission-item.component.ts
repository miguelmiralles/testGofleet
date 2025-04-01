import { Component, input } from '@angular/core';
import { ISubmission } from '../../../core/models/submissions.interface';
import { DatePipe } from '@angular/common';
import { SvgIconComponent } from '../../../shared/svg-icon/svg-icon.component';
import { StatusEnum } from '../../../core/enums/status.interface';

@Component({
  selector: 'gofleet-submission-item',
  imports: [
    DatePipe,
    SvgIconComponent
  ],
  templateUrl: './submission-item.component.html',
  styleUrl: './submission-item.component.scss'
})
export class SubmissionItemComponent {

  submission = input.required<ISubmission>();

  getStatusIcon() {
    switch (this.submission().status) {
      case StatusEnum.Completed:
        return 'bullet_green';
      case StatusEnum.Uncompleted:
        return 'bullet_orange';
      case StatusEnum.InReview:
        return 'bullet_grey';
      default:
        return 'bullet_grey';
    }
  }

  getStatusText() {
    switch (this.submission().status) {
      case StatusEnum.Completed:
        return 'Completed';
      case StatusEnum.Uncompleted:
        return 'Uncompleted';
      case StatusEnum.InReview:
        return 'Needs Review';
      default:
        return 'Unknown';
    }
  }

  getStatusClass(): string {
    switch (this.submission().status) {
      case StatusEnum.Completed:
        return 'status-completed';
      case StatusEnum.Uncompleted:
        return 'status-uncompleted';
      case StatusEnum.InReview:
        return 'status-in-review';
      default:
        return 'status-in-review';
    }
  }

}
