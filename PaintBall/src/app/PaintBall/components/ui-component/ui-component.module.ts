import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import { VerticalMenuComponent } from "./vertical-menu/vertical-menu.component";
import { CardComponent } from './card/card.component';

@NgModule( {
  declarations: [
    UIComponentsModule.components,
  ],
  imports: [
    UIComponentsModule.material,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    UIComponentsModule.material,
    UIComponentsModule.components
  ],
  providers: []
} )
export class UIComponentsModule {
  public static material = [
    FlexLayoutModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
  ];
  public static components = [
    CardComponent,
    HeaderComponent,
    VerticalMenuComponent,
    NavbarComponent
  ]
}
