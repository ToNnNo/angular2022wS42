import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FiltreComponent } from './components/filtre/filtre.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { LocaleComponent } from './components/locale/locale.component';
import { CustomFilterComponent } from './components/custom-filter/custom-filter.component';
import { PipelindromePipe } from './pipes/pipelindrome.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormComponent } from './components/form/form.component';
import { ExistDirective } from './validators/exist.directive';
import { SignupComponent } from './components/signup/signup.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ObservableComponent } from './components/observable/observable.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ProfilComponent } from './components/profil/profil.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { HttpComponent } from './components/http/http.component';

import { registerLocaleData } from "@angular/common";
import fr from '@angular/common/locales/fr';
import { AddressComponent } from './components/address/address.component';
registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponent,
    TodolistComponent,
    HomeComponent,
    NotfoundComponent,
    FiltreComponent,
    DirectiveComponent,
    LocaleComponent,
    CustomFilterComponent,
    PipelindromePipe,
    SortPipe,
    CustomDirectiveComponent,
    HighlightDirective,
    FormComponent,
    ExistDirective,
    SignupComponent,
    ProvidersComponent,
    ObservableComponent,
    AuthenticationComponent,
    ProfilComponent,
    ParametersComponent,
    HttpComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // useValue, useExisting, useFactory, useClass
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
