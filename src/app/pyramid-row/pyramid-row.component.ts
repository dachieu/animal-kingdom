import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../model/animal';

//import { PyramidRow } from '../model/pyramid-row';

@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {

@Input() animal: Animal;

//animalRow: PyramidRow;

  constructor() {



// this.animal = [new Animal ('tiger','http://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg'), new Animal ('lion','http://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg') ];




//this.animalRow = new PyramidRow ();

	
 }

  ngOnInit() {
  }

}
