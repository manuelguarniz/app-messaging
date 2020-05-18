import { Component, OnInit } from '@angular/core';
import { LobbyItem } from '@app/models/lobby-item/lobby-item';
import { LobbyItemForm } from '@app/models/lobby-item/lobby-item-form';
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

  listRoom: Array<LobbyItemForm> = [];

  constructor() { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.listRoom = [];
    this.data.forEach(item => {
      const roomForm = new LobbyItemForm(item);
      roomForm.handleEventClick = (room: LobbyItemForm) => this.handleEventClickCard(room);
      this.listRoom.push(roomForm);
    });
  }

  handleEventClickCard(room: LobbyItemForm) {
    console.log('click: ' + room.nameLobby);
    room.loading = ClrLoadingState.LOADING;
    setTimeout(() => {
      room.loading = ClrLoadingState.DEFAULT;
    }, 2000);
  }

}
