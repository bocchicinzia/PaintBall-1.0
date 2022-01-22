import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';
import { ContentMapper } from 'src/app/PaintBall/services/content-mapper.interface';

@Component( {
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
} )
export class ModalConfirmComponent implements OnInit, ContentMapper<ContactsPageModel> {
  content: Observable<any>
  constructor( private dialogRef: MatDialogRef<ModalConfirmComponent>,
    private deliveryService: ContentDeliveryService ) {

    this.content = this.deliveryService.get( 'modal-confirm', 'modal-confirm', this );
  }

  map( json: any, className: string ) {
    return new ContactsPageModel( json, className )
  }

  ngOnInit(): void {
  }
  confirm() {
    this.dialogRef.close( true );
  }
  goToBack() {
    this.dialogRef.close( false );
  }

}
