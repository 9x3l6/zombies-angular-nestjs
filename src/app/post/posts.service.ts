import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from './posts';
import { Video } from '../video/videos';
// import posts from '../../posts.data.json';
// import videos from '../../videos.data.json';
import {marked} from 'marked';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postUrl = '/assets/posts/';
  apiUrl = 'http://localhost:3000/api/v1'
  apiEndpoint = '/posts';
  
  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.apiUrl + this.apiEndpoint);
  }

  async getPost(link: string | null) {
    let result = {
      text: '' as any,
      data: {} as Post
    };
    
    this.http.get(this.postUrl + link + '.md', { responseType: 'text' })
      .pipe(map(res => {
        res = marked.parse(res);
        res = res.replace(/<h1>/ig, `<h1 style="color: #DEAD00;">`);
        const found = res.match(/\[embed_video id=(.*)\]/g);
        found?.map(value => {
          const id = Number(value.replace(/\[embed_video id=(.*)\]/, '$1'));
          this.http.get<Video>(this.apiUrl + '/videos/' + id, {responseType: 'json'})
          .pipe(map(video => {              
            let html5video = '';
            if (video.image_url) {
              html5video = `<video class="video video-embed" controls poster="${video.image_url}">`;
            } else {
              html5video = `<video class="video video-embed" controls>`;
            }
            if (video.video_urls) {
              const urls = JSON.parse(JSON.stringify(video.video_urls))
              urls.forEach((url: { url: string }) => {
                html5video += `<source src="${url.url}" type="video/mp4" />`;
              });
            }
            html5video += '</video>';
            res = res.replace(value, html5video)
            
            return res;
          })).subscribe(text => {
            result.text = text
          });
        });
      })).subscribe();
    await this.http.get<Post>(this.apiUrl + this.apiEndpoint + '/' + link)
      .pipe(map(post => {
        result.data = post;
      }))
      .subscribe();
    return result;
  }
  // handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }
}
