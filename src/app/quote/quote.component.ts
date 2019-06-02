import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Quotes } from '../quotes';
import { HighestVoteDirective } from '../highest-vote.directive';
import { QuoteFormComponent } from '../quote-form/quote-form.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() authorName: QuoteFormComponent;
  @Input() quote: any;
  @Input() submitByName: any;
  @Input() quoteUpdate: QuoteFormComponent;

  // @ViewChild(QuoteFormComponent) child: QuoteFormComponent;


  Id = 7;

  quotes = [
    new Quotes(
      1,
      'Walt Disney',
      'The way to get started is to quit talking and to start doing.',
      'Arnold',
      new Date(2019, 2, 10),
      0,
      0
    ),
    new Quotes(
      2,
      'Will Rogers',
      'Do not let yesterday take too much of today.',
      'Arnold',
      new Date(2019, 2, 24),
      0,
      0
    ),
    new Quotes(
      3,
      'Winston Churchill',
      'The pessimist sees difficulty in every opportunity. The optimist sees opportunitty in every difficulty.',
      'Arnold',
      new Date(2019, 3, 6),
      0,
      0
    ),
    new Quotes(
      4,
      'Unknown',
      'You learn more from failure than from success. Do not let it stop you. Failure builds character.',
      'Arnold',
      new Date(2019, 5, 9),
      0,
      0
    ),

  ];
  showDesc(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    this.quotes[index].showBtn = !this.quotes[index].showBtn;
  }

  deleteQuote(quoteDelete, index) {
    if (quoteDelete) {
      this.quotes.splice(index, 1);
    }
    // console.log(quoteDelete);
  }

  // quoteUpdate() {
  //   // this. new Quotes();
  //   console.log("I work ");
  // }

  upVoter(index) {
    let i: number;
    i = this.quotes[index].upVote;
    i++;
    this.quotes[index].upVote = i;
    console.log('this i: ' + i);

    let arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    console.log(arr);
    const high = Math.max.apply(Math, arr);
    console.log('Highest ' + high);
    return high;
  }
  dnVoter(index) {
    let j: number;
    j = this.quotes[index].dnVote;
    j++;
    this.quotes[index].dnVote = j;
  }


  highest(arr) {
    arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }


  // updateQuote(id: any, author: any, description: any, submitter: any, setDate: Date, upVote: any, dnVote: number) {
  //   author = this.authorName.value;
  //   description = this.quote.value;
  //   submitter = this.submitByName.value;

  //   console.log('author: ' + author);
  //   console.log('desc: ' + description);
  //   console.log('submitter: ' + submitter);
  //   id = this.Id++;
  //   console.log('id: ' + id);
  //   upVote = 0;
  //   dnVote = 0;
  //   // this.quotes.unshift({ id, by, description, setDate, upVote, dnVote });
  //   this.quotes = [];
  //   this.quotes.unshift(id, author, description, submitter, new Date(2019, 4, 29), upVote, dnVote);

  // }

  constructor() { }

  ngOnInit() {

    let arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote - quote.dnVote);
    });
    console.log(arr);
    const high = Math.max.apply(Math, arr);
    console.log('Highest ' + high);

    // this.child.updateQuote();
  }

}
