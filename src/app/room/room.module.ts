import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './router/room-routing.module';
import { NewRoomComponent } from './new-room/new-room.component';
import { RoomComponent } from './room.component';

@NgModule({
  declarations: [
    RoomComponent,
    NewRoomComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
  ],
})
export class RoomModule {}
