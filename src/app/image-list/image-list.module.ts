import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './image-list.component';
import { ImageComponent } from './image/image.component';
import { HeaderComponent } from './header/header.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorsComponent } from './colors/colors.component';


@NgModule({
  declarations: [
    ImageListComponent, 
    ImageComponent, 
    HeaderComponent, 
    UploadComponent, 
    ColorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ImageListComponent,
    ImageComponent,
    ColorsComponent
  ]
})
export class ImageListModule { }
