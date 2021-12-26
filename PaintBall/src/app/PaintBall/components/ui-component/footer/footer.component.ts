import { Component, Input, OnInit } from '@angular/core';
import { Copyright } from './model/copyright.class';
import { FollowUs } from './model/follow-us.class';
import { Sponsor } from './model/sponsor.class';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
} )
export class FooterComponent implements OnInit {
  @Input() sponsor?: Sponsor[];
  @Input() followUs?: FollowUs[];
  @Input() copyright?: Copyright;

  constructor() {}

  ngOnInit(): void {
  }

  openUrl( url: string ) {
    window.open( 'https://' + url, '_blank' );
  }

}
