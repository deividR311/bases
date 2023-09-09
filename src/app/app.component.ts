import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;
  public heros : string[] = ['superman', 'spiderman', 'batman', 'thor'];
  public heroDeleted? : string = '';

  constructor(  ) {

  }

  increaseBy() {
    this.counter += 1;
  }

  decreaseBy() {
    this.counter -= 1;
  }

  deleteLastHero() {
    this.heroDeleted = this.heros.pop();
  }

  onNewCharacter( character : any ): void {
    this.heros.push(character);
  }

  getHeros() : string[] {
    return this.heros;
  }
}
