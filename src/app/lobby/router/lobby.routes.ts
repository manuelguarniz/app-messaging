import { Routes } from '@angular/router';
import { LobbyComponent } from '../lobby.component';

export const routesLobby: Routes = [{
  path: '',
  component: LobbyComponent,
  children: [
    {
      path: 'lobby',
      component: LobbyComponent,
    },
    {
      path: '',
      redirectTo: 'lobby',
      pathMatch: 'full',
    },
    // {
    //   path: '**',
    //   component: NotFoundComponent,
    // },
  ],
}];
