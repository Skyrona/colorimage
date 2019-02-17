import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImaggaService {

  constructor(private http: HttpClient) { }

  getColorsByUrl(url: string) {
    return this.http.get(`https://api.imagga.com/v2/colors?image_url=${url}`,
    {headers: new HttpHeaders().set("Authorization", "Basic YWNjXzkxNmU3Y2E5YmJhNDBmOTo1MmQ4ZGYzMDliNTA2YmI2MjdhOTBkOTAzMjJhYWQyNw==")}
    )};

  getColorsByImage(image: any) { };
}
