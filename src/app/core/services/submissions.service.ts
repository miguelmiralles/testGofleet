import { Injectable } from '@angular/core';
import { ISubmission, ISubmissionQuery } from '../models/submissions.interface';
import { SENDERS_MOCK, SUBMISSIONS_MOCK } from '../mock/submissions.mock';
import { firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  submissions: ISubmission[] = SUBMISSIONS_MOCK;
  senders: string[] = SENDERS_MOCK;

  /*
    This function returns the list of senders. Used for the dropdown in the submissions list.
  */
  getSenders() {
    return firstValueFrom(of(this.senders));
  }

  /*
    This function returns the list of submissions, considering the query.
  */
  getSubmissions(query?: ISubmissionQuery) {
    let results = this.submissions;
    if (query) {
      if (query.search) {
        const search = query.search.toLowerCase();
        results = results.filter(sub =>
          sub.from.toLowerCase().includes(search) ||
          sub.to.toLowerCase().includes(search) ||
          sub.location.address.toLowerCase().includes(search)
        );
      }

      if (query.fromId) {
        results = results.filter(sub =>
          sub.from === query.fromId
        );
      }

      if (query.statusId) {
        results = results.filter(sub =>
          sub.status === Number(query.statusId)
        );
      }

      if (query.date) {
        results = results.filter(sub =>
          sub.dueDate === query.date
        );
      }
    }

    return firstValueFrom(of(results));
  }
}
