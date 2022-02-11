import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes-router-link',
  templateUrl: './heroes-router-link.component.html',
  styleUrls: ['./heroes-router-link.component.css']
})
export class HeroesRouterLinkComponent implements OnInit {
  heroesRouterLink: Hero[] = [];

  constructor(private heroService: HeroService,private messageService:MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.messageService.add(`onSelectService: Selected hero id=`)
    this.heroService.getHeroesService().subscribe(heroesRouterLink => this.heroesRouterLink = heroesRouterLink);
  }
}
