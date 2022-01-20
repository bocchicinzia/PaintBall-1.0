import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
} )
export class ModalConfirmComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ModalConfirmComponent> ) {}

  ngOnInit(): void {
  }
  confirm() {
    this.dialogRef.close( true );
  }
  goToBack() {
    this.dialogRef.close( false );
  }

}
