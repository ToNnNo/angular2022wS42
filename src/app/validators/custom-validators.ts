import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidators {

  public static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

      const regexp = new RegExp('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])');

      if( !regexp.test(control.value) ) {
        return { 'email': true }
      }

      return null;
    }
  }

  public static checkPasswords(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passwordFormControl = control.get('password');
      const confirmFormControl = control.get('confirm');

      if(passwordFormControl?.value != confirmFormControl?.value) {
        confirmFormControl?.setErrors({ 'check_passwords': true })
      }

      return null;
    }
  }
}
