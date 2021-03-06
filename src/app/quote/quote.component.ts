import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Comfort in life is fueled by money', 'Jean-Pierre' ,'Joan', 0,0,new Date(2020,2,14)),
    new Quote(2, 'Yours is the only opinion of you that matters' ,'Kent Beck','Jacky',0,0, new Date(2021,3,8)),
    new Quote(3, 'Who you are tomorrow begins with what you do today' ,'Michelle Ntalami', 'Yusuf', 0,0,new Date(2019,0,12)),
    new Quote(4, 'Leap and a net will appear' ,'Martha','Kent Beck',0,0, new Date(2022,3,29)),
    new Quote(5, 'Optimism is an occupational hazard of programming' ,'Kent Beck', 'Winny', 0,0,new Date(2020,11,12)),
  ];
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated)
    this.quotes.unshift(quote)
  }


  toggleDetails(index: number){
    this.quotes[index].showPerson = !this.quotes[index].showPerson;
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }



  constructor(){}

  ngOnInit(){
  }
  
}



