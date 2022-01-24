import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterDetailModel } from 'src/app/PaintBall/pages/master-detail/master-detail.model';
import { ContentDeliveryService } from 'src/app/PaintBall/services/content-delivery.service';
import { ContentMapper } from 'src/app/PaintBall/services/content-mapper.interface';

@Component( {
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
} )
export class HeaderComponent implements OnInit, ContentMapper<MasterDetailModel> {
  content: Observable<MasterDetailModel>;
  constructor( private deliveryService: ContentDeliveryService ) {
    this.content = this.deliveryService.get( 'header', 'header', this );
  }
  map( json: any, className: string ) {
    return new MasterDetailModel( json, className );
  }

  ngOnInit(): void {
  }

}
