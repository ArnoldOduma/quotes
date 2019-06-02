import { Component, OnInit, Input } from '@angular/core';
import { Quotes } from '../quotes';
import { QuoteComponent } from '../quote/quote.component';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {



  @Input() quote: Quotes;
  @Input() showDesc: QuoteComponent;



  constructor() {

  }

  ngOnInit() {
  }

}
