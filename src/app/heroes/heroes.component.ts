import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HEROES_MOCK_DATA} from '../mock-heroes';
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';//字串

  hero: Hero = {//  angular-tour-heroes/src/app/hero.ts [export interface Hero]
    id: 1,
    name: "Tom",
  }

  heroesMockData = HEROES_MOCK_DATA;
  heroesServiceData:Hero[];
  // heroesServiceData = this.heroService.getHeroesService();

  // heroes: Hero[];//宣告一下

  selectedHerosMock?: Hero;
  selectedHeroesService?: Hero;

  constructor(private heroService: HeroService,private messageService:MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }


  onSelectMock(hero_: Hero): void {
    this.messageService.add(`onSelectMock: Selected hero id=${hero_.id}`)
    this.selectedHerosMock = hero_;

  }

  onSelectService(hero_: Hero): void {
    this.messageService.add(`onSelectService: Selected hero id=${hero_.id}`)
    this.selectedHeroesService = hero_;
  }


  getHeroes(): void {
    this.heroService.getHeroesService().subscribe(heroes => {
      this.heroesServiceData = heroes;
    });

  }
}
