import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail-router-link',
  templateUrl: './hero-detail-router-link.component.html',
  styleUrls: ['./hero-detail-router-link.component.css']
})
export class HeroDetailRouterLinkComponent implements OnInit {
  heroDetailRouterLink: Hero | undefined;

  constructor(private route: ActivatedRoute,
              //ActivatedRoute 儲存著到這個 HeroDetailComponent 實例的路由資訊
              private heroService: HeroService,
              private location: Location
              //location 是一個 Angular 的服務，用來與瀏覽器打交道。
  ) {
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroeServiceById(id)
      .subscribe(hero => this.heroDetailRouterLink = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
