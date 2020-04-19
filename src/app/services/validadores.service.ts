import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValid {
  [s: string]: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ValidadoresService {
  constructor() {}

  noAranda(control: FormControl): ErrorValid {
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

  existeUsuario(
    control: FormControl
  ): Promise<ErrorValid> | Observable<ErrorValid> {
    if (!control.value) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'strider') {
          resolve({ existeUsuario: true });
        } else {
          resolve(null);
        }
      }, 3500);
    });
  }
}
