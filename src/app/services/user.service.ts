import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/userInterface";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) { }

  // CRUD = Create Read Update Delete

  public findAll(): Observable<UserInterface[]> {

    // peut être fait plus globalement avec les interceptors
    let headers: HttpHeaders = new HttpHeaders();
    if( this.authentication.isAuthenticate() ) {
      headers = headers.append('Authorization', `Bearer ${this.authentication.getToken()}`)
    }

    /**
     * let name = "john";
     * { name: name } <=> { name }
     */
    return this.http.get<UserInterface[]>(`${environment.baseUrlApi}/users`, { headers });
  }

  public save(user: UserInterface): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${environment.baseUrlApi}/users`, user);
  }
}
