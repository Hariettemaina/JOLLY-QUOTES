import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
      // QUOTES ARRAY
      quote:Quote[]=[
        new Quote('Sometimes life is going to hit you in the head. Dont loose faith.','Steve Jobs','Felista Kiriinya', new Date(2020,1,23),2,1'),
        new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Faith Mucami',new Date(2020,3,30),4,3),
        new Quote('Competitions are for horses not artists','Anonymous', 'Eustine whels',new Date(2020,7,23),3,4),
        new Quote('If life were predictable it would cease to be life, and be without flavor.','Eleanor Roosevelt', 'James Racher',new Date(2020,4,10),1,0),
        new Quote('The way to get started is to quit talking and begin doing','Walt Disney','Harry Thunder',new Date(2020,5,9),9,2),
        new Quote('Life is what happens when you are making other plans','John Lennon', 'George Whither',new Date(2020,6,12),1,0),
      ] 
     //function for adding new quote
     addNewQuote(quote){

       this.quote.push(quote)
     }

     //function for toggling small text
     toggleDetails(index){
       this.quote[index].showDetails = !this.quote[index].showDetails
     }
      
  constructor() { }

  ngOnInit(): void {
  }

}
