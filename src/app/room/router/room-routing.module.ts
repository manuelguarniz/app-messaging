import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routesRoom } from './room.routes';

@NgModule({
  imports: [RouterModule.forChild(routesRoom)],
  exports: [RouterModule]
})
export class RoomRoutingModule {}
