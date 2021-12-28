import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePagesComponent } from "../home-pages/home-pages.component";
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
        component: HomePagesComponent
      },
      {
        path: "prezzo",
        component: HomePagesComponent
      },
      {
        path: "galleria",
        component: HomePagesComponent
      },
      {
        path: "contatti",
        component: HomePagesComponent
      }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class MasterDetailRoutingModule {}
