import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintBallRoutingModule } from './paintball-routing.module';
import { GalleryPageComponent } from './pages/gallery-page/gallery-page.component';

@NgModule(
  {
    imports: [
      PaintBallRoutingModule,
      CommonModule
    ],
    exports: [
      PaintBallRoutingModule
    ],
    providers: [
      { provide: LOCALE_ID, useValue: 'it-IT' }
    ],
    declarations: [
      GalleryPageComponent
    ]
  } )
export class PaintballModule {}
