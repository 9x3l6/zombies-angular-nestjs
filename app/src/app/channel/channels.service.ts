import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import videos from '../../videos.data.json';
import { Channel } from './channels';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  apiUrl = 'http://localhost:3000/api/v1'
  apiEndpoint = '/channels';

  constructor(private http: HttpClient) { }

  getChannels() {
    // return videos;
    return this.http.get(this.apiUrl + this.apiEndpoint);
  }

  getChannel(id: string | null) {
    // const video = videos.find((v: { link: string | null; }) => v.link === link);
    const video = this.http.get<Channel>(this.apiUrl + this.apiEndpoint + '/' + id);
    return video;
  }
}
