import { Injectable } from '@angular/core';

import videos from '../../music.data.json';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getVideos() {
    return videos;
  }

  getVideo(link: string | null) {
    const video = videos.find((v: { link: string | null; }) => v.link === link);
    return video;
  }
}
