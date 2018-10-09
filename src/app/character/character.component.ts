import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { PotterService } from '../potter.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor( private route:ActivatedRoute, private potterService:PotterService) { }

  name:string;
  house:string;
  school:string

  ngOnInit() {
  	this.route.params.subscribe(({id}) =>
  		this.potterService.getCharecter(id).subscribe(chararacter => {this.name = chararacter.name
  			this.house = chararacter.house
  			this.school = chararacter.school
  		})


	);
  }

}

