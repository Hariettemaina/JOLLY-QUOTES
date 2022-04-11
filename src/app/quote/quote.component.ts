import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }
  
      // QUOTES ARRAY
      quote:Quote[]=[
        new Quote('Sometimes life is going to hit you in the head. Dont loose faith.','Steve Jobs','Hariette Maina', new Date(2022,4,11),2,1),
        new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall.','Nelson Mandela','Naomy Carol',new Date(2022,3,30),4,3),
        new Quote('Competitions are for horses not artists','Anonymous', 'James Mwangi',new Date(2022,2,23),3,4),
        new Quote('If life were predictable it would cease to be life, and be without flavor.','Manu Chandi', 'James Racher',new Date(2022,4,10),1,0),
        new Quote('The way to get started is to quit talking and begin doing','Walt Disney','Harry Thunder',new Date(2022,1,9),9,2),
        new Quote('Life is what happens when you are making other plans','John Lennon', 'George Whither',new Date(2022,3,12),1,0),
      ];
      
     //function for adding new quote 
     addNewQuote(quote: Quote): void{
       this.quote.push(quote)
     }

     //function for toggling small text
     toggleDetails(index){
       this.quote[index].showDetails = !this.quote[index].showDetails;
     }

     //function for deleting quote
     deletingQuote(deleteQuote, index){
       if(deleteQuote){
         let toDelete = confirm ('Are you sure you want to delete this quote?')

         if(toDelete){
           this.quote.splice(index, 1)
         }
       }
      }     

      

     highlightHighest (){
      let quoteUpvote = []
      let highestUpVote: number
      for (let j = 0; j < this.quote.length; j++){
        quoteUpvote.push(this.quote[j].upVote)
      }
      quoteUpvote.sort(function (a, b){
        return b - a
      })
      highestUpVote =quoteUpvote[0]
      return highestUpVote;
    }
 
      // //highlightHighest (){ 
      //   //let quote Upvote = [] 
      //   let highest UpVote: number 
      //   for (let j = 0; j < this.quote.length; j++)
      //   { quote Upvote.push(this.quote[j].upVote) 
      //   } quote Upvote.sort(function (a, b){ return b - a })
      //    highest UpVote =quote Upvote[0] 
      //    //return highestUpVote; }
  

  ngOnInit(): void {
  
  }

}
