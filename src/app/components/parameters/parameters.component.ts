import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  slug: string|null = null;

  name?: string;
  address?: string;
  age?: number;

  more = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /**
     * paramMap -> Object
     * params   -> Array
     */
    this.route.paramMap.subscribe( (param: ParamMap) => {
      if( param.has('name') ) {
        // this.load( param.get('name')! );

        this.slug = param.get('name')
        this.load( this.slug! );
      }
    });

    this.route.queryParamMap.subscribe( (queryParam: ParamMap) => {
      if( queryParam.has('more')) {
        this.more = true;
      } else {
        this.more = false;
      }
    });
  }

  load(slug: string): void {
    if( slug == 'john') {
      this.name = "John Doe";
      this.address = "46 rue des canonniers, 59800 Lille";
      this.age = 25;
    }
    if( slug == 'jane') {
      this.name = "Jane Doe";
      this.address = "256 avenue de la marnes, 80000 Amiens";
      this.age = 21;
    }
  }

  saveAndQuit(): void {
    // ... sauvegarde ...

    this.router.navigateByUrl('/parameters');
  }
}
