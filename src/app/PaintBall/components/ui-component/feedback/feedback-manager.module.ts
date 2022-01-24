import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UIComponentsModule } from "../ui-component.module";
import { CardFeedbackComponent } from "./card-feedback/card-feedback.component";
import { FeedbackManagerComponent } from "./feedback-manager.component";
import { PaginatorComponent } from './paginator/paginator.component';
import { FormComponent } from './form/form.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { CheckboxStarComponent } from './checkbox-star/checkbox-star.component';


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
    CheckboxStarComponent,
    ModalConfirmComponent,
    FormComponent,
    PaginatorComponent,
    CardFeedbackComponent,
    FeedbackManagerComponent,
  ]
}
