import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DownloadService } from './service/download.service';

@Component( {
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.scss']
} )
export class DownloadButtonComponent implements OnInit {

  constructor( private serviceDownload: DownloadService ) {}

  ngOnInit(): void {
  }

  download( urlImg: string ) {
    this.serviceDownload.download( urlImg )
  }
}
