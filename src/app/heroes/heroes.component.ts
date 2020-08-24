import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //Importing the hero interface
import { HEROES } from '../mock-heroes'; // Importing the mock list of heroes to treat

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = { //creating new hero
    id: 1,
    name: 'Windstorm'
  }

  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void {
  }

}