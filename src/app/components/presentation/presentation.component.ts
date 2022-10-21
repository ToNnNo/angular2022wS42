import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {


  //firstname: string|undefined
  firstname?: string;
  product = { name: "Pomme", price: 12.9 }

  html = "<b>Hello World</b>"; //xss <script></script>

  source = "assets/images/loxy.jpeg";

  message?: string;

  users = ['Aloïs', 'Julien', 'Stéphane']

  constructor() { }

  ngOnInit(): void {
    this.firstname = "Stéphane";
  }

  hello(name:string = "World"): void {
    alert(`Hello ${name}`);
  }

  confirmation(event: MouseEvent): void {
    event.preventDefault();
    confirm("Etes vous sur ?");
  }

}
