import { NgModule } from '@angular/core';
import { LobbyComponent } from './lobby.component';
import { LobbyRoutingModule } from './router/lobby-routing.module';
import { ClarityModule } from '@clr/angular';
import { CardRoomComponent } from '@app/components/card-lobby/card-lobby.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LobbyComponent,
    CardRoomComponent,
  ],
  imports: [
    CommonModule,
    LobbyRoutingModule,
    ClarityModule,
  ],
})
export class LobbyModule {}
