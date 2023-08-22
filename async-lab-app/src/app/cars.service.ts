import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(public http: HttpClient) { }
  url = "/assets/data.json";
  getCars() {
    return this.http.get(this.url)
  }
}
