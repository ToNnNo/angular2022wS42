import { Component, OnInit } from '@angular/core';
import {ProductInterface} from "../../interfaces/productInterface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: ProductInterface = { name: '', price: 0 };
  // products: ProductInterface[] = [];
  products: Array<ProductInterface> = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveProduct(form: NgForm): void {
    form.control.markAllAsTouched();

    const strPrice = String(this.product.price);
    this.product.price = +strPrice.replace(',', '.');

    if(form.valid) {
      this.products.push(this.product);
      this.product = {name: '', price: 0};
      form.reset(this.product);
    }

  }

}
