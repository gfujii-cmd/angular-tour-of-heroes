import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Importing the hero interface
import { HEROES } from '../mock-heroes'; // Importing the mock list of heroes to treat
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){} //hero injection

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes(); //retrieve the heroes from the service
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}