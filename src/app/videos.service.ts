import { Injectable } from '@angular/core';

import videos from '../../videos.data.json';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  getVideo(link: string | null) {
    const video = videos.find((v: { link: string | null; }) => v.link === link);
    return video;
  }
}
