import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImaggaService } from 'src/app/shared/services/imagga.service';
import { ColorListModel } from 'src/app/shared/models/imagga-colors/colors-list-model';
import { ColorModel } from 'src/app/shared/models/imagga-colors/colors-model';

@Component({
  selector: 'color-image-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {

  @Input() image: string;
  public colorsImage: ColorModel[];
  constructor(private imaggaService: ImaggaService) { }

  ngOnInit() {
    this.imaggaService.getColorsByUrl(this.image).subscribe(
      (data:ColorListModel)=>{
        this.colorsImage=data.result.colors.image_colors;        
      }
    )
  }

  ngOnChanges() {
    
  }

}
