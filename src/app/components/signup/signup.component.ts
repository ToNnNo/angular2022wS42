import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { signupConstraint } from "../../constraints/signup.constraint";
import {CustomValidators} from "../../validators/custom-validators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // FormControl( value, [validators], [validatorsAsync] )
  // FormGroup( controls, [validators], [validatorsAsync] )
  form = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      CustomValidators.email()
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8)
    ]),
    confirm: new FormControl(null, [Validators.required]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  }, {
    validators: CustomValidators.checkPasswords()
  });

  constructor() { }

  ngOnInit(): void {
  }

  inscription(): void {
    this.form.markAllAsTouched();

    if( this.form.valid ) {
      console.log(this.form.getRawValue());
      // console.log(this.form.value);
    }
  }

  /*validate(): string|null {
    const field = this.form.get('email');

    if(field?.touched) { // ? safe operator (permet de s'assurer que l'instance de l'objet n'est pas null)
      if(field?.hasError('required')) {
        return `L'adresse email est obligatoire`;
      }
    }

    return null;
  }*/

  validate(name: string): string|null {
    const field = this.form.get(name);

    // @ts-ignore
    const constraints = signupConstraint[name];
    if(field?.touched) { // ? safe operator (permet de s'assurer que l'instance de l'objet n'est pas null)
      for(let constraint in constraints) {
        if(field?.hasError(constraint)) {
          return constraints[constraint];
        }
      }
    }

    return null;
  }

}
