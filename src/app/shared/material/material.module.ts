import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
} from '@angular/material'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
    ],
  exports :[
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
