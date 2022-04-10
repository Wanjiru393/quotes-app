import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  quotes: Quote[] =[
    new Quote(1,'"And, when you want something, all the universe conspires in helping you to achieve it.” — Paulo Coelho',0,0),
    new Quote(2,'“Be the change that you wish to see in the world.”-Mahatma Gandhi',0,1),
    new Quote(3,'“Do not take life too seriously,live. You will never get out of it alive.” —Elbert Geoffry Hubbard',0,0),
    new Quote(4,'"Failure is another stepping-stone to greatness."-Oprah Winfrey',0,0),
    new Quote(5,'"Sometimes you can not see yourself clearly until you see yourself through the eyes of others."-Ellen DeGeneres',0,0)

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
