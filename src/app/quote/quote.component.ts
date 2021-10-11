import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Comfort in life is fueled by money', 'Jean-Pierre' ,'Joan', new Date(2020,2,14)),
    new Quote(2, 'Yours is the only opinion of you that matters' ,'Kent Beck','Jacky', new Date(2021,3,8)),
    new Quote(3, 'Who you are tomorrow begins with what you do today' ,'Michelle Ntalami', 'Yusuf', new Date(2019,0,12)),
    new Quote(4, 'Leap and a net will appear' ,'Martha','Kent Beck', new Date(2022,3,29)),
    new Quote(5, 'Optimism is an occupational hazard of programming' ,'Kent Beck', 'Winny', new Date(2020,11,12)),
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



