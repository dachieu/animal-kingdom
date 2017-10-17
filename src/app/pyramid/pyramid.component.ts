import { Component, OnInit } from '@angular/core';
import { Animal } from '../model/animal';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {

animal: Animal[];


  constructor() { 
this.animal = 

[new Animal ('tiger','http://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg'), 
new Animal ('shark','https://www.thesun.co.uk/wp-content/uploads/2017/06/nintchdbpict0002407806071.jpg?strip=all&w=960'),

new Animal ('aligator','https://o.aolcdn.com/images/dims3/GLOB/crop/3974x2612+0+31/resize/1028x675!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fa5042e9b6f6b0dd34f62683f8e07a8b1%2F205110594%2F171586404.jpg'),

 ];


}

  ngOnInit() {
  }

}
