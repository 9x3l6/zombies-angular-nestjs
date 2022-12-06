import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import videos from 'videos.data.json';
import { Video } from './videos';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  apiUrl = 'http://localhost:3000/api/v1'
  apiEndpoint = '/videos';

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get(this.apiUrl + this.apiEndpoint);
  }

  getVideo(link: string | null) {
    // let video
    // const video = videos.find((v: { link: string | null; }) => v.link === link);
    return this.http.get<Video>(this.apiUrl + this.apiEndpoint + '/' + link)
    // .pipe(map(vid => {
    //   video = vid;
    // })).subscribe();
    // console.log(video,'fdsaa')
    // return video;
  }
}
