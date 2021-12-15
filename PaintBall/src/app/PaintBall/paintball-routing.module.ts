import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import( './pages/home-pages/home-pages.module' ).then( m => m.HomePagesModule )
  },
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class PaintBallRoutingModule {}
