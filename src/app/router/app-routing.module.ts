import { RouterModule, ExtraOptions } from '@angular/router';
import { NgModule } from '@angular/core';
import { routesApp } from './app.routes';

const config: ExtraOptions = {
  onSameUrlNavigation: 'reload',
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routesApp, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
