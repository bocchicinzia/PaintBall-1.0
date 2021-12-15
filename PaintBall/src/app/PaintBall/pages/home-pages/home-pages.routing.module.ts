import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePagesComponent } from "./home-pages.component";

const routes: Routes = [

  {
    path: "",
    component: HomePagesComponent,
    children: [
      {
        path: "",
        redirectTo: 'home'
      },
      {
        path: "home",
        component: HomePagesComponent
      }
    ]
  }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class HomePagesRoutingModule {}
