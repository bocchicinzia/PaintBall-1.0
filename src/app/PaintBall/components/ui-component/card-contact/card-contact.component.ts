import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ContactsPageModel } from 'src/app/PaintBall/pages/contacts-page/contacts-page-model';

@Component( {
  selector: 'app-card-contact',
  templateUrl: './card-contact.component.html',
  styleUrls: ['./card-contact.component.scss']
} )
export class CardContactComponent implements OnInit {

  @Input() selectedIndex: number;
  @Input() cardContents: Observable<ContactsPageModel>;
  content: any[];
  unsubscription: Subscription;

  constructor( private el: ElementRef ) {}

  ngOnInit(): void {
    this.unsubscription = this.cardContents.subscribe( res => {
      this.content = res.contentCard;
    } );
    this.selectedIndex = 0;
  }

  ngOnChanges( changes: SimpleChanges ): void {
    let animate = this.el.nativeElement.querySelectorAll( '.content' );
    if ( changes.selectedIndex ) {
      animate.forEach( ( element: any ) => {
        element.classList.remove( 'animate__zoomIn' );
        setTimeout( () => {
          element.classList.add( 'animate__zoomIn' );
        }, 0 );
      } );
    }
  }

  ngOnDestroy(): void {
    this.unsubscription.unsubscribe();
  }

}
