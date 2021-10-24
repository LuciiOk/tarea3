import { Component, Input, OnInit } from '@angular/core';
import { Categorias, listaCategorias } from 'app/interfaces/categorias';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  categorias:Categorias[] = listaCategorias; 
  cat:any;

  @Input()
  noticia:any;

  constructor() { }
  
  ngOnInit(): void {
    this.cat = this.categorias.find((categoria:Categorias) => this.noticia.idcategoria == categoria.id)
  }

}
