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
  @Input() file: File;

  public colorsImage: ColorModel[];
  constructor(private imaggaService: ImaggaService) { }

  ngOnInit() {
    console.log(this.image);
    
  }

  ngOnChanges() {    
    console.log(this.image);
    
      this.imaggaService.getColorsByImage(this.file).subscribe(
        (data: ColorListModel) => {
          this.colorsImage = data.result.colors.image_colors;
        }
      )
    }

}
