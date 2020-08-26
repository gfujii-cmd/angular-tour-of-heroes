import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import {Observable, of} from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    // return message
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero> {
    return of({id: 1, name: 'test'});
}

  constructor(
    private messageService: MessageService,
    private http: HttpClient ) { }

  // Hero service message
  private log(message: string){
    this.messageService.add(`HeroService: ${message}`);
  }

  //URL to web API
  private heroesUrl = 'api/heroes';


}