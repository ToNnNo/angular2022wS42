import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  state!:boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authenticationService.authenticate.subscribe((value) => {
      this.state = value
    })
  }

  login(): void {
    this.authenticationService.logIn();

    if( this.route.snapshot.queryParamMap.has('redirect') ) {
      this.router.navigateByUrl( this.route.snapshot.queryParamMap.get('redirect')! );
    }
  }

  logout(): void {
    this.authenticationService.logOut();
  }

  isAuthenticate(): boolean {
    return this.state;
  }

  ngOnDestroy() {
    // this.authenticationService.authenticate.unsubscribe();
  }
}
