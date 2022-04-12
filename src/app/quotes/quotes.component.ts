import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  addQuote(quote:Quote){
    this.quotes.push(quote)
  }

  quotes: Quote[] =[
    new Quote(1,'"And, when you want something, all the universe conspires in helping you to achieve it.”',"Paulo Coelho","Mercy",new Date(2020,7,10),0,0),
    new Quote(2,'“Be the change that you wish to see in the world.”','Mahatma Gandhi','Ian',new Date(2020,6,12),0,0),
    new Quote(3,'“Do not take life too seriously,live. You will never get out of it alive.”','Elbert Geoffry Hubbard','Kioko',new Date(2021,6,9),0,0),
    new Quote(4,'"Failure is another stepping-stone to greatness."','Oprah Winfrey','Jane',new Date(2019,4,7),0,0)
  ];
 

  arr: number[] =this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)
   addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  clear(index:any){
    this.quotes.splice(index,1)
  }
 

  constructor() {
    // if(this.resetTimer === false) {
    //   this.startTime = Date.now();
    //   this.resetTimer = true;

    // }
    // this.interval =setInterval(() => {
    //   this.counter =Date.now();
    //   this.timePassed =Date.now() - this.startTime) / 1000

    }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
      
   }

  
