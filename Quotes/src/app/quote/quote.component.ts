import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote [] =[
    new Quote(
      "Jacinta",
      "Work in silence and let them rejoice your success in public with joiyous noise.",
      "Florence",
    ),
    new Quote(
    "Hadren",
    "Find a job you enjoy doing and you will never have to work a day.",
    "Hadren",
    ),
  ];

  addQuote(quotes){
    quotes.completeDate = new Date(quotes.completeDate);
    this.quotes.push(quotes)

  }
  deleteQuote(index){
    this.quotes.splice(index,1);

  }
  constructor() { }

  ngOnInit() {
  }

}
