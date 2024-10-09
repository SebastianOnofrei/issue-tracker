import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrl: './issue-report.component.css'
})
export class IssueReportComponent implements OnInit {

  issueForm!: FormGroup;
  @Output() formClose = new EventEmitter();

  constructor(private issueService: IssuesService){}

  ngOnInit(): void {
    // Create the form and initialize 'type' with the default value
    this.issueForm = new FormGroup(
      {
        title: new FormControl('',{nonNullable:true}),
        description: new FormControl('',{nonNullable:true}),
        priority: new FormControl('',{nonNullable:true}),
        type: new FormControl('Bug',{nonNullable:true})
      }
    )
  
    this.issueForm.get('type')?.valueChanges.subscribe(value => {
      console.log('Selected value changed to:', value);  
    });

    this.issueForm.get('priority')?.valueChanges.subscribe(value => {
      console.log('Selected value changed to:', value);  
    });

    this.issueForm.get('title')?.valueChanges.subscribe(value => {
      console.log('Selected value changed to:', value);  
    });

    this.issueForm.get('description')?.valueChanges.subscribe(value => {
      console.log('Selected value changed to:', value);  
    });
  };


  addIssue(){
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue)
    this.formClose.emit();
  }
  
  
}
