import { Directive, Injectable, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UniqueValidator implements AsyncValidator {


  constructor() { }

  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      return this.isUnique(control.value);
  }

  isUnique(value: any) :  Observable<ValidationErrors | null>{
    // calls a api servie and sends the value to check unqieness returns validation errors or null
     return of(null);
  }

}
