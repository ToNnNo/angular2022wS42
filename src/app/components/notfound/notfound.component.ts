import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <h2 class="text-warning">404 - Not Found</h2>
    <p>La page recherchée n'existe pas</p>
    <p>Revenir à l'<a routerLink="/">accueil</a></p>
  `,
  styles: []
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
