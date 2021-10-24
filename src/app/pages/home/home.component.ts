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
    console.log(this.notici)

  }

}
