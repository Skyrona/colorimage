import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'color-image-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public myGroup: FormGroup;
  public urlName: string;


  constructor() { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      firstName: new FormControl()
    });
  }

  onSubmit() {
  }

}
