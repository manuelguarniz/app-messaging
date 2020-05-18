import { Component, OnInit } from '@angular/core';
import { LobbyItem } from '@app/models/lobby-item/lobby-item';
import { LobbyItemModel } from '@app/models/lobby-item/lobby-item.model';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'amg-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  data: Array<LobbyItem> = [
    { nameLobby: 'Discusión sobre Angular vs React vs Vue.', presenter: 'Manuel Guarniz', initialDate: new Date(), participants: 15 },
    { nameLobby: 'Como fomentar un buen clima laboral.', presenter: 'Julio Berne', initialDate: new Date(), participants: 10 },
    { nameLobby: 'De que se conforma un agujero negro.', presenter: 'Marco Sifuentes', initialDate: new Date(), participants: 7 },
    { nameLobby: '¿Javascript es el futuro?', presenter: 'Maria Parado', initialDate: new Date(), participants: 287 },
  ];

  listLobbyItem: Array<LobbyItemModel> = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.listLobbyItem = [];
    this.data.forEach(item => {
      const roomForm = new LobbyItemModel(item);
      roomForm.handleEventClick = (lobbyItem: LobbyItemModel) => this.handleEventClickCard(lobbyItem);
      this.listLobbyItem.push(roomForm);
    });
  }

  handleEventClickCard(lobbyItem: LobbyItemModel) {
    console.log('click: ' + lobbyItem.nameLobby);
    lobbyItem.loading = ClrLoadingState.LOADING;
    setTimeout(() => {
      lobbyItem.loading = ClrLoadingState.DEFAULT;
    }, 2000);
  }

}
