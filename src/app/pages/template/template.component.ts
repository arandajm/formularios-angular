import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  // Default value for ngModel
  usuario: any = {
    nombre: '',
  };
  constructor() {}

  ngOnInit(): void {}

  guardar(templateForm: NgForm) {
    if (templateForm.invalid) {
      // iterate each form control and chek if it's invalid
      Object['values'](templateForm.controls).map((control) => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
