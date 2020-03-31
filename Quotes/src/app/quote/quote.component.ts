import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {
  showDescription: boolean = false;

  quotes: Quote [] =[
    new Quote(
      name:"Jacinta",
      quote:"Work in silence and let them rejoice your success in public with joiyous noise.",
      publisher:"Florence",
    ),
    new Quote(
      name:"Hadren"
      quote:"Find a job you enjoy doing, and you will never have to work a day in your life.",
      publisher:"Hadren"
    ),
  ];

  addQuote(quotes){
    quotes.completeDate = new Date(quotes.completeDate);
    this.quotes.push(quotes)

  }
  deleteQuote(index){
    this.quotes.splice(index,1);

  }
  toggleQuote(){
    this.showDescription = !this.showDescription;
  }
  constructor() { }

  ngOnInit() {
  }

}
