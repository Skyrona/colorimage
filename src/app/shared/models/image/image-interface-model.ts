import { Image } from "./image-model";

export interface ImageInterface {

  results: Array<ImageInterface>;

  uploaded: Array<Image>;
  
  info: Image;

}