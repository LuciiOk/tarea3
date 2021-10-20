import { Component, OnInit } from '@angular/core';
import {News, noticias} from '../../interfaces/news'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  noticias:News[] = noticias;
  noticiasDifCat:News[] = [];
  noticiasCat:News[] = [];

  constructor() {
    
  }

  ngOnInit(): void {
    this.noticiasDifCat = noticias.filter((noticia:News)=> 
      noticia.categoria != 'entretenimiento' && noticia.categoria != 'economia' &&
      noticia.categoria != 'deporte' && noticia.categoria != 'salud' 
      && noticia.categoria != 'tecnologia' && noticia.categoria != 'mundo');

    this.noticiasCat = noticias.filter((noticia:News)=> 
      noticia.categoria == 'entretenimiento' || noticia.categoria == 'economia' ||
      noticia.categoria == 'deporte' || noticia.categoria == 'salud' 
      || noticia.categoria == 'tecnologia' || noticia.categoria == 'mundo');
  }

}
