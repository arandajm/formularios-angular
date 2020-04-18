import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      // Define form field
      nombre: [''],
      apellido: [''],
      email: [''],
    });
  }

  guardar() {
    console.log(this.reactiveForm.value);
  }
}
