import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-houses',
	templateUrl: './houses.component.html',
	styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

	constructor(private potterService:PotterService, private route:Router) { }
	houses:any;

	ngOnInit() {
		this.potterService.getHouse().subscribe(data => this.houses = data);
	}

	goToCharacters(id){
		this.route.navigate(['characters', id]);
	}


}
