import { Component, OnInit } from '@angular/core';
import {sortOrder} from "../../types/sortOrderType";

@Component({
  selector: 'app-custom-filter',
  templateUrl: './custom-filter.component.html',
  styleUrls: ['./custom-filter.component.css']
})
export class CustomFilterComponent implements OnInit {

  text?: string;
  order: sortOrder = "ASC";

  users = [
    'Aloïs', 'Julien', 'Stéphane', 'Rémi', 'Jean',
    'Marie', 'Sophie', 'Alexandre', 'Justine', 'Anne'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeOrder(): void {
    /*if( this.order == 'ASC') {
      this.order = 'DESC';
    }else{
      this.order = 'ASC';
    }*/

    this.order = this.order == 'ASC' ? 'DESC': 'ASC';
  }

}
