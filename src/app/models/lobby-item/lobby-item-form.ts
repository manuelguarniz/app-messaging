import { LobbyItem } from './lobby-item';

export class LobbyItemForm implements LobbyItem {
  nameLobby: string;
  presenter: string;
  initialDate: Date;
  participants: number;

  handleEventClick?: (room: LobbyItemForm) => void;
  loading: any;

  constructor(room: LobbyItem) {
    this.nameLobby = room.nameLobby;
    this.presenter = room.presenter;
    this.initialDate = room.initialDate;
    this.participants = room.participants;
  }

}
