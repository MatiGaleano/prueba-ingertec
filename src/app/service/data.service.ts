import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from 'src/assets/animal-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL: string = 'assets/home.json'
  data!: Animal

  constructor(private http: HttpClient) { }

  
  getData(): Observable<any> {
    return this.http.get(this.URL);
  }


}
