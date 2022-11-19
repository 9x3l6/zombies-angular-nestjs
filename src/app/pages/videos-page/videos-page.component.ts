import { Component, OnInit } from '@angular/core';

import VideosJSON from '../../../../api/data/videos.data.json'

interface VIDEO_URL {
  location: string;
  url: string;
}

interface VIDEO {
  _link: string;
  video_id: number;
  image_url: string;
  video_urls: [VIDEO_URL];
  duration: string;
  categories: [string];
}

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent implements OnInit {
  videos= VideosJSON

  constructor() { }

  ngOnInit(): void {
  }

}
