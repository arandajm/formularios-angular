import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  // Declare Form
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  createForm() {
    this.reactiveForm = this.fb.group({
      // Define form field and their validations
      // Initial value, [sync validators], async validators
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // Define getters
  get nombreNoValido() {
    return (
      this.reactiveForm.get('nombre').invalid &&
      this.reactiveForm.get('nombre').touched
    );
  }

  get apellidoNoValido() {
    return (
      this.reactiveForm.get('apellido').invalid &&
      this.reactiveForm.get('apellido').touched
    );
  }

  get emailNoValido() {
    return (
      this.reactiveForm.get('email').invalid &&
      this.reactiveForm.get('email').touched
    );
  }

  guardar() {
    if (this.reactiveForm.invalid) {
      // iterate each form control and chek if it's invalid
      Object['values'](this.reactiveForm.controls).map((control) => {
        console.log(control);
        if (control.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }
    console.log(this.reactiveForm.value);
  }
}
