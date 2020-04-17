import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
})
export class TemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  guardar(templateForm: NgForm) {
    console.log(templateForm.value);
    console.log('Guardando cambios...');
  }
}
