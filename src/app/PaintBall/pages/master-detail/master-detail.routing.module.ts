import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryPageComponent } from "../gallery-page/gallery-page.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { PriceComponent } from "../price-page/price.component";
import { MasterDetailComponent } from "./master-detail.component";

const routes: Routes = [

  {
    path: "",
    component: MasterDetailComponent,
    children: [
      {
        path: "",
        redirectTo: 'home'
      },
      {
        path: "home",
        component: HomePageComponent
      },
      {
        path: "prezzo",
        component: PriceComponent
      },
      {
        path: "galleria",
        component: GalleryPageComponent
      },
      {
        path: "contatti",
        component: HomePageComponent
      }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class MasterDetailRoutingModule {}
