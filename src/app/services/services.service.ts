import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor( private http: HttpClient ) {}

  url = 'https://newsapi.org/v2/top-headlines?sources=mtv-news&apiKey=e7e9f8ea36ea4140ba4565d5bd07e5cf'

  getConfig() {
    return this.http.get(this.url)
  }

}
