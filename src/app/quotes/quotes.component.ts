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
    new Quote(1,'"And, when you want something, all the universe conspires in helping you to achieve it.”',"Paulo Coelho","Mercy",1,0),
    new Quote(2,'“Be the change that you wish to see in the world.”','Mahatma Gandhi','Ian',0,0),
    new Quote(3,'“Do not take life too seriously,live. You will never get out of it alive.”','Elbert Geoffry Hubbard','Kioko',0,0),
    new Quote(4,'"Failure is another stepping-stone to greatness."','Oprah Winfrey','Jane',0,0)
  ];
  get sortQuotes(){
    return this.quotes.sort((a,b) =>{
      return <any>new Date(b.datePosted) - <any>new Date (a.datePosted);
    });
  }

  arr: number[] =this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)
   addedQuote(quote:any){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  // quoteDelete(isRead:any){
  //   if (isRead) {
  //     let toDelete = confirm('Delete?')
  //     if(toDelete){
  //       this.quotes.splice(index,1);
  //     }
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}

