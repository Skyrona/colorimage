import { Injectable } from '@angular/core';
import { LocalStorage } from "@ngx-pwa/local-storage";
import { Observable } from 'rxjs';
import { Image } from "../models/image/image-model";

@Injectable({
  providedIn: 'root'
})
export class ImageLocalService {

  private namespace: string;

  constructor(private localstorage: LocalStorage) {
    this.namespace = "color-image";
  }

  getImage() {
    return this.localstorage.getItem<Image[]>(`${this.namespace}.image`);
  }

  postImage(images:Image[]):Observable<boolean>{
    return this.localstorage.setItem(`${this.namespace}.image`, images);
  }
}
