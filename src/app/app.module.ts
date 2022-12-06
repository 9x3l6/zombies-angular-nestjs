import { SecurityContext } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { VgCoreModule } from 'ngx-videogular';
import { VgControlsModule } from 'ngx-videogular';
import { VgOverlayPlayModule } from 'ngx-videogular';
import { VgBufferingModule } from 'ngx-videogular';

import { MarkdownModule } from 'ngx-markdown'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { ChannelsPageComponent } from './pages/channels-page/channels-page.component';
import { WebsitesPageComponent } from './pages/websites-page/websites-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { PsychopathsComponent } from './sections/psychopaths/psychopaths.component';
import { ZombiesComponent } from './sections/zombies/zombies.component';
import { IntroComponent } from './sections/intro/intro.component';
import { AllPostsComponent } from './sections/all-posts/all-posts.component';
import { PopularChannelsComponent } from './sections/popular-channels/popular-channels.component';
import { TrustedWebsitesComponent } from './sections/trusted-websites/trusted-websites.component';
import { MusicVideosComponent } from './sections/music-videos/music-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { ChannelComponent } from './channel/channel.component';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MissingPageComponent,
    HomePageComponent,
    VideosPageComponent,
    ChannelsPageComponent,
    WebsitesPageComponent,
    MusicPageComponent,
    CategoryPageComponent,
    PostPageComponent,
    VideoPageComponent,
    PsychopathsComponent,
    ZombiesComponent,
    IntroComponent,
    AllPostsComponent,
    PopularChannelsComponent,
    TrustedWebsitesComponent,
    MusicVideosComponent,
    VideoPlayerComponent,
    ChannelComponent,
    WebsiteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE }),
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
