import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    ClarityModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class ThemesModule {}
