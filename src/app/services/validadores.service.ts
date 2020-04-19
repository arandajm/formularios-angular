import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidadoresService {
  constructor() {}

  noAranda(control: FormControl): { [s: string]: boolean } {
    console.log(control);
    if (control.value?.toLowerCase() === 'aranda') {
      return { noAranda: true };
    }
    return null;
  }

  passwordsIguales(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];
      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noesIgual: true });
      }
    };
  }
}
