import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'color-image-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit, OnChanges{

  @Input() colorsDiv: string[];
  constructor() { }

  ngOnInit() { }
  
  ngOnChanges(){
  }

}
