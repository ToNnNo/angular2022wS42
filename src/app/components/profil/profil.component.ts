import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  name!: string;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.authentication.authenticate.subscribe((value) => {
      if(value) {
        this.name = "John Doe";
      } else {
        this.name = "Visiteur";
      }
    })
  }

}
