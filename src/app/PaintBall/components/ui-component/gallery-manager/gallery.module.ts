import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UIComponentsModule } from "../ui-component.module";
import { GalleryManagerComponent } from "./gallery-manager.component";
import { ImagesComponent } from "./images/images.component";
import { ContentDeliveryServiceGalleryPage } from "./service/content-delivery.service";
import { ImageFullScreenComponent } from './image-full-screen/image-full-screen.component';
import { ButtonComponent } from './button/button.component';

@NgModule( {
  declarations: [
    GalleryModule.components,
  ],
  imports: [
    UIComponentsModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    GalleryModule.components,
  ],
  providers: [ContentDeliveryServiceGalleryPage]
} )
export class GalleryModule {
  public static components = [
    ButtonComponent,
    ImageFullScreenComponent,
    ImagesComponent,
    GalleryManagerComponent,
  ]
}
