import { Routes } from '@angular/router';

export const routesApp: Routes = [
  {
    path: '',
    loadChildren: () => import('../lobby/lobby.module')
      .then(m => m.LobbyModule),
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
