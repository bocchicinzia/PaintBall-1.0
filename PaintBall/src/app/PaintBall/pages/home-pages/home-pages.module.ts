import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DragDropModule } from "@angular/cdk/drag-drop"
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomePagesRoutingModule } from "./home-pages.routing.module";
import { HomePagesComponent } from "./home-pages.component";
import { UIComponentsModule } from "../../components/ui-component/ui-component.module";

const component = [
  HomePagesComponent
]
@NgModule( {
  declarations: [
    ...component
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    DragDropModule,
    HomePagesRoutingModule,
    UIComponentsModule,
    CommonModule
  ]
} )
export class HomePagesModule {}
