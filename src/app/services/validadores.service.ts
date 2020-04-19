import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

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
}
