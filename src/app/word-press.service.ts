import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordPressService {

  url = `https://mrtwitt.000webhostapp.com/wp-json/wp/v2/`;

  constructor(private http: HttpClient) {

  }

  retrieveCategories() {
    return this.http.get(this.url + 'categories')
      .pipe(map(res => res));
  }

  retrievePostsInCategory(categoryId: number) {
    return this.http.get(this.url + 'posts?categories=' + categoryId)
      .pipe(map(res => res));
  }

}
