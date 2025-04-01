import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from "@angular/forms";
import { debounceTime } from "rxjs";
import { StatusEnum } from "../../core/enums/status.interface";
import { ISubmission, ISubmissionQuery } from "../../core/models/submissions.interface";
import { SubmissionsService } from "../../core/services/submissions.service";
import { MapListsComponent } from "../components/map-lists/map-lists.component";

@Component({
  selector: 'gofleet-submissions-list',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MapListsComponent
  ],
  templateUrl: './submissions-list.component.html',
  providers: [],
  styleUrl: './submissions-list.component.scss'
})
export class SubmissionsListComponent implements OnInit {

  filtersForm!: FormGroup;

  currentView: 'list' | 'map' = 'map';

  submissions: ISubmission[] = [];

  forms: { id: string, name: string }[] = [];

  statuses = [
    { id: StatusEnum.InReview, name: 'Needs Review' },
    { id: StatusEnum.Completed, name: 'Complete' },
    { id: StatusEnum.Uncompleted, name: 'Uncomplete' }
  ];

  fb = inject(FormBuilder);
  submissionsService = inject(SubmissionsService);

  constructor() {
    this.filtersForm = this.fb.group({
      search: [''],
      form: [''],
      status: [''],
      date: ['']
    });
    this.filtersForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      const query: ISubmissionQuery = {
        search: this.filtersForm.value.search || null,
        fromId: this.filtersForm.value.form || null,
        statusId: this.filtersForm.value.status || null,
        date: this.filtersForm.value.date || null
      };
      this.getSubmissions(query);
    });
  }

  async ngOnInit(): Promise<void> {
    this.getSubmissions();
    this.forms = (await this.submissionsService.getSenders()).map((sender: string) => ({ id: sender, name: sender }));
  }

  getSubmissions(query?: ISubmissionQuery) {
    this.submissionsService.getSubmissions(query).then((submissions: ISubmission[]) => {
      this.submissions = submissions;
    });
  }

  /*
    Function to export data to CSV
  */
  exportData() {
    if (!this.submissions.length) {
      alert('No submissions found');
      return;
    }
    const headers = ['ID', 'Due Date', 'Status', 'Address'];
    const csvData = this.submissions.map((submission: ISubmission) => [
      submission.id,
      submission.dueDate,
      submission.status,
      `${submission.location.address}. Lat: ${submission.location.latitude}, Lng: ${submission.location.longitude}`
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'submissions.csv';
    link.click();
  }

}
