import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.css']
})
export class FiltreComponent implements OnInit {

  date = new Date();

  start = 0;
  end = 3;
  users = [
    'Aloïs', 'Julien', 'Stéphane', 'Rémi', 'Jean',
    'Marie', 'Sophie', 'Alexandre', 'Justine', 'Anne'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  prev(): void {
    if( this.start > 0 ) {
      this.start -= 3;
      this.end -= 3;
    }
  }

  next(): void {
    if( this.end < this.users.length ) {
      this.start += 3;
      this.end += 3;
    }
  }
}
