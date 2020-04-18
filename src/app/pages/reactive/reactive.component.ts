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

  guardar() {
    console.log(this.reactiveForm.value);
  }
}
