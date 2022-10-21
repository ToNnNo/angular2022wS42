import {Component, OnInit} from '@angular/core';
import {AddressInterface} from "./interfaces/addressInterface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  address?: AddressInterface;

  ngOnInit(): void {
    this.address = {
      street: "Rue des canonniers",
      suite: "46, 2ème étage",
      city: "Lille",
      zipcode: "59800"
    }
  }

}
