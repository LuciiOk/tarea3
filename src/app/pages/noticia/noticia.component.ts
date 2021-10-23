import { Component, OnInit } from '@angular/core';
import {noticias, News} from '../../interfaces/news'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent implements OnInit {

  noticias:News[] = noticias;
  noticia:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
     let idNoticia:number = 0;
     this.route.params.subscribe((params:any) => {
      idNoticia = params['id']
    })

    this.noticia = noticias.find((element:News) => element.id == idNoticia)

    console.log(this.noticia)
  }
}
