import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../interfaces/userInterface";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  // users: Array<UserInterface> = [];
  users$!: Observable<UserInterface[]>

  // async/await
  // address
  // token header

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    /*this.userService.findAll().subscribe({
      next: (users: UserInterface[]) => {
        this.users = users;
      },
      error: (err: HttpErrorResponse) => {
        alert(`${err.name} ${err.status} ${err.statusText}:
${err.message}`);
      }
    });*/

    this.users$ = this.userService.findAll();
  }

  create(): void {
    // valide & récupère les données du formulaire
    let user: UserInterface = { name: "John Doe", username: "Johnny", email: "john.doe@gmail.com", phone: "06 118 218 00" }

    this.userService.save(user).subscribe({
      next: (user: UserInterface) => {
        console.log(user);
      },
      error: (err: HttpErrorResponse) => {
        alert(`${err.name} ${err.status} ${err.statusText}:
${err.message}`);
      }
    });
  }

}
