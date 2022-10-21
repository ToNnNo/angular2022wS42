import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  show = true;
  display?: string = undefined;

  payment = 'done';

  progress = 10;
  bgcolor = 'red';

  products = [
    { name: "Marteau", price: 100, state: 'disponible'},
    { name: "Tournevis", price: 98, state: 'indisponible'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  information(): string|null {
    if(this.show) {
      return "Promotion durant tout le mois d'Octobre";
    }

    return null;
  }

}
