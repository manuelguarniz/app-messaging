import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './router/room-routing.module';
import { NewRoomComponent } from './new-room/new-room.component';
import { RoomComponent } from './room.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  declarations: [
    RoomComponent,
    NewRoomComponent,
  ],
  imports: [
    CommonModule,
    RoomRoutingModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
})
export class RoomModule {}
