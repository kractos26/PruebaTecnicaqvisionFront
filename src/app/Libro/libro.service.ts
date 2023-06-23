
import { Injectable } from '@angular/core';
import {Libro} from './libro.model';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService{
  baseUrl = environment.baseUrl;
  private libroLista: Libro[] = [];

  private libroSubject = new Subject<Libro[]>();

  constructor(private http: HttpClient){}


  obtenerLibro(){
    this.http.get<Libro[]>(this.baseUrl + 'Libro')
    .subscribe( (data) => {
      this.libroLista = data;
      console.log("libro servicio",data)
      this.libroSubject.next([...this.libroLista]);
    });
  }

  obtenerActualListener(){
    return this.libroSubject.asObservable();
  }

}
