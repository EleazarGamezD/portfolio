import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {


  url = '';

  constructor(

    private _sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<VideosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.url = this.data.video;
  }
  getVideoIframe(url: string) {
    if (this.url === null) {
      return '';
    }
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
