import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter} from 'events';
import { Quote } from '../quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quoted =new Quote(0,"","","",0,0);
  @Output() add = new EventEmitter<Quote>();
  addedQuote(){
    // this.add.emit(:string);
    this.quoted = new Quote(0,"","","",0,0);
  }
  newQuote(){
    this.add.emit(this.quoted)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
