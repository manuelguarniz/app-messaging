import { Routes } from '@angular/router';
import { NewRoomComponent } from '../new-room/new-room.component';
import { RoomComponent } from '../room.component';

export const routesRoom: Routes = [{
  path: '',
  component: RoomComponent,
  children: [
    {
      path: 'new',
      component: NewRoomComponent,
    },
  ],
}];
