import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop"
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MasterDetailRoutingModule } from "./master-detail.routing.module";
import { MasterDetailComponent } from "./master-detail.component";
import { UIComponentsModule } from "../../components/ui-component/ui-component.module";
import { HomePageComponent } from "../home-page/home-page.component";
import { ContentDeliveryService } from "../../services/content-delivery.service";
import { PriceComponent } from "../price-page/price.component";
import { GalleryPageComponent } from "../gallery-page/gallery-page.component";
import { SaveChangeService } from "../gallery-page/service/save-change.service";
import { GalleryModule } from "../../components/ui-component/gallery-manager/gallery.module";

@NgModule( {
  declarations: [
    MasterDetailModule.component
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    DragDropModule,
    MasterDetailRoutingModule,
    GalleryModule,
    UIComponentsModule,
    CommonModule
  ],
  providers: [ContentDeliveryService, SaveChangeService]
} )
export class MasterDetailModule {
  public static component = [
    GalleryPageComponent,
    PriceComponent,
    HomePageComponent,
    MasterDetailComponent
  ]
}
