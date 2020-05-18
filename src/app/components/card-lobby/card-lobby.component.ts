import { Component, OnInit, Input } from '@angular/core';
import { LobbyItemModel } from '@app/models/lobby-item/lobby-item.model';

@Component({
  selector: 'amg-card-lobby',
  templateUrl: './card-lobby.component.html',
  styles: [],
})
export class CardRoomComponent implements OnInit {
  @Input() lobbyItem: LobbyItemModel;

  constructor() { }

  ngOnInit(): void { }

}
