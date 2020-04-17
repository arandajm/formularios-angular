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
        if (control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  getPaises() {
    this._paisesService.getPaises().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
