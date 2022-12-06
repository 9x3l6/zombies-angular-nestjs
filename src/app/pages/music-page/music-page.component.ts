import { Component, OnInit } from '@angular/core';

import { MusicService } from 'src/app/music.service';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent implements OnInit {
  videos: any | undefined;
  
  constructor(private musicService: MusicService) {
    this.videos = this.musicService.getVideos()
  }

  ngOnInit(): void {
  }

}
