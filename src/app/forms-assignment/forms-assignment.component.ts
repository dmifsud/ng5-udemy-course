import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-assignment',
  templateUrl: './forms-assignment.component.html',
  styleUrls: ['./forms-assignment.component.css']
})
export class FormsAssignmentComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

}
