import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Libro } from './libro.model';
import { LibroService } from './libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit, OnDestroy {
  desplegarColumnas = ['titulo', 'sinopsis', 'npaginas'];
  dataSource = new MatTableDataSource<Libro>();

  private libroSubscription!: Subscription;

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.libroService.obtenerLibro();
    this.libroSubscription = this.libroService
      .obtenerActualListener()
      .subscribe((libro: Libro[]) => {
        this.dataSource.data = libro;
      });
      console.log("respuesta libro",this.dataSource.data)
  }

  ngOnDestroy(){
      this.libroSubscription.unsubscribe();
  }

}
