import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop"
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MasterDetailRoutingModule } from "./master-detail.routing.module";
import { MasterDetailComponent } from "./master-detail.component";
import { UIComponentsModule } from "../../components/ui-component/ui-component.module";
import { HomePagesComponent } from "../home-pages/home-pages.component";
import { ContentDeliveryService } from "../../services/content-delivery.service";
import { PriceComponent } from "../price/price.component";

@NgModule( {
  declarations: [
    MasterDetailModule.component
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    DragDropModule,
    MasterDetailRoutingModule,
    UIComponentsModule,
    CommonModule
  ],
  providers: [ContentDeliveryService]
} )
export class MasterDetailModule {
  public static component = [
    PriceComponent,
    HomePagesComponent,
    MasterDetailComponent
  ]
}