import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  isEdit: boolean;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
        .subscribe(
          (param: Params) => {
            const id = param['id'];
            this.isEdit = typeof id !== 'undefined';
            console.log(this.isEdit);
          }
        );
  }

}
