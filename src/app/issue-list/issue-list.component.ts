import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';


@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css'
})
export class IssueListComponent implements OnInit{
  issues: Issue[] =[];
  // will toggle the appearance of the report issue form. display of modal :)
  showReportIssue = false;

  constructor(private issueService: IssuesService){

  }

  private getIssues(){
    this.issues = this.issueService.getPendingIssues();
  }

  ngOnInit(): void {
    this.getIssues(); 
    console.table(this.issues)
  }

  onCloseReport(){
    this.showReportIssue = false;
    this.getIssues();
  }

  
}
