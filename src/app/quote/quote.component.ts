import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Yours is the only opinion of you that matters','Lala Anthony','Joan',new Date(2020,0,17)),
    new Quote(2, 'No one is you and that is your super-power', 'Jack Harlot', 'Jackline', new Date(2021,7,13)),
    new Quote(3, 'Leap and a net will appear', 'Kent Beck','Martha', new Date(2021,9,2)),
    new Quote(4, 'Optimism is an occupational hazard of programming','Kent Beck', 'Winny', new Date(2020,12,12)),
    new Quote(5, 'Comfort is fueled by money','Wentworth Miller','Yusuf', new Date(2021,2,10)),
  ];
  toggleDetails(index: number){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
