import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  public heros : string[] = ['superman', 'spiderman', 'batman', 'thor'];

  constructor() { }

  deleteLastHero( heroDeleted? : string ) {
    heroDeleted = this.heros.pop();
  }

  onNewCharacter( character : any ): void {
    this.heros.push(character);
  }

  getHeros() : string[] {
    return this.heros;
  }
}
