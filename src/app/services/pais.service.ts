import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  getPaises() {
    const url: string = 'https://restcountries.eu/rest/v2/lang/es';
    return this.http.get(url).pipe(
      //Using map operator to transform the response
      map((paises: any[]) => {
        paises.map((pais) => {
          return { name: pais.name, code: pais.alpha3Code };
        });
      })
    );
  }
}
