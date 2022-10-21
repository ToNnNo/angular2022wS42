import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Token} from "@angular/compiler";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static readonly TOKEN = 'token';
  authenticate = new BehaviorSubject<boolean>(this.isAuthenticate());

  constructor() { }

  logIn(): void {
    // récupérer username/password
    // Requête HTTP vers API (POST)
    //    --> En réponse le serveur renvoie un jeton de connexion (JWT)

    // persister le jeton
    localStorage.setItem(AuthenticationService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')

    this.authenticate.next(true);
  }

  logOut(): void {
    localStorage.removeItem(AuthenticationService.TOKEN);
    this.authenticate.next(false);
  }

  isAuthenticate(): boolean {
    return localStorage.getItem(AuthenticationService.TOKEN) != null;
  }

  getToken(): string|null {
    return localStorage.getItem(AuthenticationService.TOKEN);
  }
}
