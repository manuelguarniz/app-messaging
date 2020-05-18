import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routesLobby } from './lobby.routes';

@NgModule({
  imports: [RouterModule.forChild(routesLobby)],
  exports: [RouterModule]
})
export class LobbyRoutingModule {}
