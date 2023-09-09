import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() onNewCharacter : EventEmitter<string> = new EventEmitter();

  public character : string = '';

  emitCharacter() : void {
    this.onNewCharacter.emit(this.character);
    console.log(this.character);

    this.character = '';
  }
}
