import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'color-image-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public myGroup: FormGroup;
  public urlName: string;
  public image: any;
  public uploadedFile: File;
  public isSubmit = false;

  constructor() { }

  ngOnInit() {
    this.myGroup = new FormGroup({
      url: new FormControl("URL", Validators.required)
    });
  }

  onSubmit() {
    if ("VALID" === this.myGroup.status) {
      this.isSubmit = true;
      this.image = this.myGroup.value['url'];
      this.myGroup.reset();
    }
  }

  onUpload(event) {
    let reader = new FileReader();
    this.isSubmit = true;
    this.uploadedFile = event.target.files[0];

    reader.onload = () => {
      this.image = reader.result;      
    };
    reader.readAsDataURL(this.uploadedFile);    
  }
}
