import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input () upward: string | undefined;
  numberOfLikes: number = 0;

  upvoteButtonClick(){
    this.numberOfLikes+=1;
  }

  downvoteButtonClick(){
    this.numberOfLikes-=1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
