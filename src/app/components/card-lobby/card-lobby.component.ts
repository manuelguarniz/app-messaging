import { Component, OnInit, Input } from '@angular/core';
import { LobbyItemForm } from '@app/models/lobby-item/lobby-item-form';

@Component({
  selector: 'amg-card-lobby',
  templateUrl: './card-lobby.component.html',
  styles: [],
})
export class CardRoomComponent implements OnInit {
  @Input() room: LobbyItemForm;

  constructor() { }

  ngOnInit(): void { }

}
