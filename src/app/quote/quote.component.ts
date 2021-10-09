import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'Yours is the only opinion of you that matters', author:'Lala'},
    {id:2, name:'Tomorrow comes', author:'Martha'},
    {id:3, name:'Leap and a net will appear', author:'Frank'},
    {id:4, name:'Optimism is an occupational hazard of programming', author:'Kent'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
