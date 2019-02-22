import { Color } from "./color-model";

export class Image {
  public id: string;
  public filename: string;
  public src: string;
  public background_colors: Array<Color>;
  public foreground_colors: Array<Color>;
  public image_colors: Array<Color>;
}