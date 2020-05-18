import { Routes } from '@angular/router';

export const routesApp: Routes = [
  {
    path: '',
    loadChildren: () => import('../lobby/lobby.module')
      .then(m => m.LobbyModule),
  },
  {
    path: 'room',
    loadChildren: () => import('../room/room.module')
      .then(m => m.RoomModule),
  },
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: '',
  //       component: null,
  //     },
  //   ]
  // },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
