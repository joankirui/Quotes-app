import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Comfort in life is fueled by money', 'Joan'),
    new Quote(2, 'Yours is the only opinion of you that matters' ,'Jacky'),
    new Quote(3, 'Who you are tomorrow begins with what you do today' ,'Yusuf'),
    new Quote(4, 'Leap and a net will appear' ,'Martha'),
    new Quote(5, 'Optimism is an occupational hazard of programming' ,'Winny'),
  ];
  toggleDetails(index: number){
    this.quotes[index].showPerson = !this.quotes[index].showPerson;
  }
  completeQuote(isComplete: any, index: number){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }



  constructor(){}

  ngOnInit(){
  }
}



