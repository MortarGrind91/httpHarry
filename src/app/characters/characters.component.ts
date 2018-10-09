import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private route:ActivatedRoute, private potterService:PotterService, private routeCharcter:Router) { }

  name:string;

  ngOnInit() {
  	this.route.params.subscribe(({id}) =>
  		this.potterService.getCharecters(id).subscribe(chararacters => {this.name = chararacters})
		);
  		
  }


  getCharacter(id){
  	this.routeCharcter.navigate(['character', id]);
  }


}
