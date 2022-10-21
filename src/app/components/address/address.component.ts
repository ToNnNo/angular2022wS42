import {Component, Input, OnInit} from '@angular/core';
import {AddressInterface} from "../../interfaces/addressInterface";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address?: AddressInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
