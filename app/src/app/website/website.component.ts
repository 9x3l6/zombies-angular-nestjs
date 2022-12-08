import { Component, OnInit } from '@angular/core';
import { WebsitesService } from 'src/app/website/websites.service';
import { Website } from './websites';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  websites: Website[] | undefined;

  constructor(private websiteService: WebsitesService) { }

  ngOnInit(): void {
    this.websiteService.getWebsites().subscribe(websites => {
      this.websites = <Website[]>websites;
    });
  }

}
