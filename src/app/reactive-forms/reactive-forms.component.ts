import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  signUpForm: FormGroup;
  forbiddenUsernames: ['Hagen', 'David'];
  genders = ['male', 'female'];
  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userGroup: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    // this.signUpForm.valueChanges.subscribe(values => {
    //   console.log(values);
    // });
    this.signUpForm.statusChanges
        .subscribe(status => {
          console.log(status);
        });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} { // look up key value pairs
    const forbiddenUsernames = ['Hagen', 'David'];
    if (forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden' : true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

}
