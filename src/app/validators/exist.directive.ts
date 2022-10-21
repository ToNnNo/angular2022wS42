import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {ProductInterface} from "../interfaces/productInterface";

@Directive({
  selector: '[exist]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: ExistDirective, multi: true }
  ]
})
export class ExistDirective implements Validator {

  @Input('exist') products!: Array<ProductInterface>;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {

    // control: AbstractControl = champs de formulaire sur lequel est appliqué le validateur

    /**
     * find() parcours l'ensemble des valeurs du tableau et retourne la première valeur trouvé
     * ici on compare le nom du product avec la valeur saisie dans le champs de formulaire
     */
    /*const product = this.products.find((product) => {
      return product.name == control.value;
    });*/

    const product = this.products.find(function(product) {
      return product.name == control.value;
    })

    // si aucune valeur n'a été trouvé dans le tableau (alors il n'y a pas d'erreur)
    if( product == undefined ) {
      return null;
    }

    // la valeur doit être de type truthy
    // la clé est une chaine de caractère qui nous servira à tester si une erreur existe pour ce validateur
    return { "exist": product };
  }


}
