import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;


  @Output() deleteQuote = new EventEmitter<boolean>();

  quoteDelete(deleteyes:boolean){
    this.deleteQuote.emit(deleteyes);
  }

  constructor() { }

  

  ngOnInit(): void {
  }

}
