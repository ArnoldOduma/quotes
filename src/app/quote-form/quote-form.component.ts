import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { FormControl } from '@angular/forms';
import { QuoteComponent } from '../quote/quote.component';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Input() quotes: QuoteComponent;

  @Output() quoteUpdate = new EventEmitter();

  authorName = new FormControl('');
  quote = new FormControl('');
  submitByName = new FormControl('');

  updateQuote() {
    let author = this.authorName.value;
    let description = this.quote.value;
    let submitter = this.submitByName.value;
    // this.quotes = [
    //   new Quotes(6,
    //     author,
    //     description,
    //     submitter,
    //     new Date(),
    //     0,
    //     0)
    // ];
    // this.quotes.unshift(id,author,description,submitter,new Date(),0,0);
    console.log(author);
    console.log(submitter);
    console.log(this.quotes[1]);
  }
  constructor() { }

  ngOnInit() {

  }

}
