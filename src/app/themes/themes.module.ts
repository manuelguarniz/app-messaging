import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    ClarityModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class ThemesModule {}
