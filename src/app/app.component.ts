import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'Yours is the only opinion of you that matters', author:'Lala'},
    {id:2, name:'Tomorrow comes', author:'Martha'},
    {id:3, name:'Leap and a net will appear', author:'Frank'},
    {id:4, name:'Optimism is an occupational hazard of programming', author:'Kent'},
  ];
}
