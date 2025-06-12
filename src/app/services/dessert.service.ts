import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DessertImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Dessert {
  image: DessertImage;
  category: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class DessertService {
  private dataUrl = 'data.json';  

  constructor(private http: HttpClient) {}

  getDesserts(): Observable<Dessert[]> {
    return this.http.get<Dessert[]>(this.dataUrl);
  }
}
