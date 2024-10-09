import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { issues } from '../assets/mock-issues';
@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  // assignam lista de issueuri
  private issues: Issue[] = issues;
  constructor() { }

  getPendingIssues(): Issue[]{
    return this.issues.filter(issue => !issue.completed)
  }

  createIssue(issue: Issue){
    console.log('am apasat this shit')
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue)
  }
}
