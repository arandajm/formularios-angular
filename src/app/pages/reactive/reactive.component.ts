import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
})
export class ReactiveComponent implements OnInit {
  // Declare Form
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.cargarFormulario();
  }

  ngOnInit(): void {}

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

  get distritoNoValido() {
    return (
      this.reactiveForm.get('direccion.distrito').invalid &&
      this.reactiveForm.get('direccion.distrito').touched
    );
  }

  get ciudadNoValido() {
    return (
      this.reactiveForm.get('direccion.ciudad').invalid &&
      this.reactiveForm.get('direccion.ciudad').touched
    );
  }

  // Define a getter to get the pasatiempos in the form
  get pasatiempos() {
    return this.reactiveForm.get('pasatiempos') as FormArray;
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      // Define form field and their validations
      // Initial value, [sync validators], async validators
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      // FormGroupName => nested objects
      direccion: this.fb.group({
        distrito: ['', Validators.required],
        ciudad: ['', Validators.required],
      }),
      // Define control array
      pasatiempos: this.fb.array([]),
    });
  }

  resetearFormulario() {
    this.reactiveForm.reset();
  }

  cargarFormulario() {
    // If you use set Value, you have to specify all fields, but with reset only specify  their yout want
    this.reactiveForm.setValue({
      nombre: 'Jesus',
      apellido: 'Aranda',
      email: 'jesus.aranda@g.com',
      direccion: {
        distrito: 'Otario',
        ciudad: 'Otawa',
      },
      pasatiempos: [],
    });
  }

  agregarPasatiempo() {
    this.pasatiempos.push(
      this.fb.control('Nuevo elemento', Validators.required)
    );
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }

  guardar() {
    if (this.reactiveForm.invalid) {
      // iterate each form control and chek if it's invalid
      return Object['values'](this.reactiveForm.controls).map((control) => {
        if (control instanceof FormGroup) {
          Object['values'](control.controls).map((control) => {
            if (control.invalid) {
              control.markAsTouched();
            }
          });
        } else {
          if (control.invalid) {
            control.markAsTouched();
          }
        }
      });
    }
    console.log(this.reactiveForm.value);
    this.resetearFormulario();
  }
}
