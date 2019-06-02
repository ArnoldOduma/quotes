import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteComponent } from '../quote/quote.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  @Input() quotes: QuoteComponent;
  @Output() quoteUpdate = new EventEmitter<boolean>();

  newQuote = new Quotes(0, '', '', '', new Date(2019, 4, 29), 0, 0);

  authorName = new FormControl('');
  quote = new FormControl('');
  submitByName = new FormControl('');

  updateQuote(complete, index) {
    console.log("Emitted");
    this.quoteUpdate.emit(complete);

  }

  // updateQuote(id: number, by: string, description: string, setDate: Date, upVote: number, dnVote: number) {
  //   by = this.authorName.value;
  //   description = this.quote.value;
  //   console.log(by);
  //   console.log(description);
  //   id = 7;
  //   upVote = 0;
  //   dnVote = 0;
  //   // this.quotes.unshift({ id, by, description, setDate, upVote, dnVote });
  //   this.newQuote = new Quotes(0, '', '', '', new Date(2019, 4, 29), 0, 0);

  //   by = '';
  //   description = '';
  // }

  constructor() { }

  ngOnInit() {
    this.newQuote = new Quotes(0, '', '', '', new Date(2019, 4, 29), 0, 0);


    // this.quoteUpdate.
  }

}
