import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  // Default value for ngModel
  usuario: any = {
    nombre: '',
    apellido: '',
    email: '',
    pais: '',
  };
  paises: any[] = [];
  constructor(private _paisesService: PaisService) {}

  ngOnInit(): void {
    this.getPaises();
  }

  guardar(templateForm: NgForm) {
    if (templateForm.invalid) {
      // iterate each form control and chek if it's invalid
      Object['values'](templateForm.controls).map((control) => {
        console.log(control);
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  getPaises() {
    this._paisesService.getPaises().subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
        this.paises.unshift({
          name: '[Seleccione un pais]',
          code: '',
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
