import { Component, OnInit } from '@angular/core';
import {CaesarCipherService} from "../../services/caesar-cipher.service";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  secret!: string;
  crypted!: string;

  constructor(private cipher: CaesarCipherService) { }

  ngOnInit(): void {
  }

  crypt(): void {
    console.log(this.secret);
    this.crypted = this.cipher.encode(this.secret);
  }

}
