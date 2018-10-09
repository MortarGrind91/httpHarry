import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PotterService {

  constructor( private http:HttpClient) { }

  	getHouse(){
  		return this.http.get('https://www.potterapi.com/v1/houses?key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa');

  	}

  	getCharecters(id){
  	  	return this.http.get(`https://www.potterapi.com/v1/characters?house=${id}&key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa`);
  	}

  	getCharecter(id){
  		return this.http.get(`https://www.potterapi.com/v1/characters/${id}?key=$2a$10$BD8PoevCo5yISOJlHy47geFYut1/qYjjtKHLQeHW2ZUD.3RndOJXa`);
  	}
}
