import { Component, OnInit } from '@angular/core';
import {noticias, News} from '../../interfaces/news';
import { Categorias,listaCategorias} from 'app/interfaces/categorias';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  noticias:News[] = noticias;
  noticia:any;
  Categoria:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
     let idNoticia:number = 0;
     this.route.params.subscribe((params:any) => {
      idNoticia = params['id']
    })

    this.noticia = noticias.find((element:News) => element.id == idNoticia)
    this.Categoria=listaCategorias.find(objecto=>objecto.id==this.noticia.idcategoria);

   
    console.log(this.noticia);
    console.log(this.Categoria);
  }
}
