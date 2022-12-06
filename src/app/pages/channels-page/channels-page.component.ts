import { Component, OnInit } from '@angular/core';
import { ChannelsService } from 'src/app/channel/channels.service';

@Component({
  selector: 'app-channels-page',
  templateUrl: './channels-page.component.html',
  styleUrls: ['./channels-page.component.scss']
})
export class ChannelsPageComponent implements OnInit {
  channels: any | undefined;

  constructor(private channelsService: ChannelsService) {
    this.channelsService.getChannels().subscribe(channels => {
      this.channels = channels;
    });
  }

  ngOnInit(): void {
  }

}
