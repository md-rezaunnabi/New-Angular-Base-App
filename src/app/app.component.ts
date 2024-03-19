import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniqueValidator } from './unique.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-app';

  formGroup: FormGroup;

  constructor(private formBuilder:FormBuilder, private uniqueValidator: UniqueValidator){

    this.formGroup = this.formBuilder.group({
      employeeId: ['', [Validators.required] ,this.uniqueValidator.validate]
    });

    //  4. <ca-input id="forgot-password-email" formControlName="email" [label]="'Email*'" [placeholder]="'Enter Email'" [errorMessages]="error()"> </ca-input>
    //   Form your perspective, what is wrong with the code above?

    // this.formGroup.get('employeeId')?.valid

  }
}
