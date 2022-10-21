import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./components/home/home.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {FiltreComponent} from "./components/filtre/filtre.component";
import {DirectiveComponent} from "./components/directive/directive.component";
import {LocaleComponent} from "./components/locale/locale.component";
import {CustomFilterComponent} from "./components/custom-filter/custom-filter.component";
import {CustomDirectiveComponent} from "./components/custom-directive/custom-directive.component";
import {FormComponent} from "./components/form/form.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ProvidersComponent} from "./components/providers/providers.component";
import {ObservableComponent} from "./components/observable/observable.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {ParametersComponent} from "./components/parameters/parameters.component";
import {AuthenticateGuard} from "./guards/authenticate.guard";
import {HttpComponent} from "./components/http/http.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'todo', component: TodolistComponent },
  { path: 'filtre', component: FiltreComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'locale', component: LocaleComponent },
  /*{ path: 'custom/filter', component: CustomFilterComponent },
  { path: 'custom/directive', component: CustomDirectiveComponent },*/
  { path: 'custom', children: [
      { path: '', redirectTo: '/custom/filter', pathMatch: 'full' }, // prefix
      { path: 'filter', component: CustomFilterComponent },
      { path: 'directive', component: CustomDirectiveComponent }
    ]
  },
  { path: 'form', component: FormComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'parameters', component: ParametersComponent },
  {
    path: 'parameters/:name',
    component: ParametersComponent,
    canActivate: ['SecureRoute', AuthenticateGuard]
  },
  { path: 'user', component: HttpComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: "SecureRoute", useValue: () => true }
  ]
})
export class AppRoutingModule { }
