import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Website } from './websites';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {
  apiUrl = 'http://localhost:3000/api/v1'
  apiEndpoint = '/websites';

  constructor(private http: HttpClient) { }

  getWebsites() {
    return this.http.get(this.apiUrl + this.apiEndpoint);
  }
}
