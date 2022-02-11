import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {HEROES_SERVICE_DATA} from "./mockService-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }


  getHeroesService(): Observable<Hero[]> {
    this.messageService.add('getHeroesService: fetched heroes');
    return of(HEROES_SERVICE_DATA);
  }

  getHeroeServiceById(id:number): Observable<Hero> {
    const hero = HEROES_SERVICE_DATA.find(h => h.id === id)!;
    this.messageService.add(`getHeroesServiceById:fetched hero id=${id}`);
    return of(hero);
  }
}
