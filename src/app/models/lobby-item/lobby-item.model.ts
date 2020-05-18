import { LobbyItem } from './lobby-item';

export class LobbyItemModel implements LobbyItem {
  nameLobby: string;
  presenter: string;
  initialDate: Date;
  participants: number;

  handleEventClick?: (lobbyItem: LobbyItemModel) => void;
  loading: any;

  constructor(lobbyItem: LobbyItem) {
    this.nameLobby = lobbyItem.nameLobby;
    this.presenter = lobbyItem.presenter;
    this.initialDate = lobbyItem.initialDate;
    this.participants = lobbyItem.participants;
  }

}
