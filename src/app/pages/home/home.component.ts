import { Component, OnInit } from '@angular/core';
import {News, noticias} from '../../interfaces/news'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 
  notici:News[] = noticias;
  noticiasDifCat:News[] = [];
  noticiasCat:News[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    this.noticiasDifCat = this.separarDiferentesCategorias();
    this.noticiasCat = this.separarNoticiasDestacadas();
  }

  separarNoticiasDestacadas = ():News[] => {
    let listaNoticias:News[] = [];
    this.notici.forEach((element:News) => {
        if ((element.idcategoria !== 0 && element.destacado == true) && listaNoticias.length < 3) {
          listaNoticias.push(element);
        }
    })
    return listaNoticias;
  }

  separarDiferentesCategorias = ():News[] => {
    let listaNoticias:News[] = [];
    this.notici.forEach((element:News) => {
      if ((element.idcategoria === 0) && listaNoticias.length < 4) {
        listaNoticias.push(element);
      }
    })
    return listaNoticias;
  }
}
