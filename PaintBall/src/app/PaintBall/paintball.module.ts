import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintBallRoutingModule } from './paintball-routing.module';



@NgModule( {
  declarations: [],
  imports: [
    PaintBallRoutingModule,
    CommonModule
  ],
  exports: [
    PaintBallRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'it-IT' }
  ]
} )
export class PaintballModule {}
