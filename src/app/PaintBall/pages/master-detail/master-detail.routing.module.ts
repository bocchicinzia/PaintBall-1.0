import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "../home-pages/home-page.component";
import { PriceComponent } from "../price/price.component";
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
        component: HomePageComponent
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
