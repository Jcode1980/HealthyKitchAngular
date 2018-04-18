import { Component, OnInit } from '@angular/core';
import {UploadEvent, UploadFile} from 'ngx-file-drop';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  public files: UploadFile[] = [];

  constructor() { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (const file of event.files) {
      file.fileEntry.file(info => {
        console.log(info);
        console.log('i got dropped');
      });
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }

}
