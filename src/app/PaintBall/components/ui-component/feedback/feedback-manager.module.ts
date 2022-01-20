import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UIComponentsModule } from "../ui-component.module";
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { FeedbackComponent } from "./feedback.component";
import { PaginatorComponent } from './paginator/paginator.component';


@NgModule( {
  declarations: [
    FeedbackManagerModule.components,
  ],
  imports: [
    UIComponentsModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    FeedbackManagerModule.components,
  ]
} )
export class FeedbackManagerModule {
  public static components = [
    PaginatorComponent,
    CardFeedbackComponent,
    FeedbackComponent,
  ]
}
