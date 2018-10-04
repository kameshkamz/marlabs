import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating : number; // to communicate from parent to child input decorotornt will send some data to child
  //...

  // when child want to send the thing to parent we use output decorator..problem here is we have to use events

  @Output() ratingToparent : EventEmitter<string> = new EventEmitter();

  rating_arr :any =[]; 

  constructor() { }

  ngOnInit() {

    this.rating_arr = Array(Math.round(this.rating)).fill(Math.round(this.rating));
    //console.log(this.rating);

  }
  sendRatingToParent(){

    this.ratingToparent.emit('Rating Value=' +this.rating);

  }

}
