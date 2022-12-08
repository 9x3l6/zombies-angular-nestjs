import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { VideosPageComponent } from './pages/videos-page/videos-page.component';
import { ChannelsPageComponent } from './pages/channels-page/channels-page.component';
import { WebsitesPageComponent } from './pages/websites-page/websites-page.component';
import { MusicPageComponent } from './pages/music-page/music-page.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { VideoPageComponent } from './pages/video-page/video-page.component';
import { MissingPageComponent } from './pages/missing-page/missing-page.component';
import { EditorComponent } from './admin/editor/editor.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'videos', component: VideosPageComponent },
  { path: 'video/:link', component: VideoPageComponent },
  { path: 'post/:link', component: PostPageComponent },
  { path: 'channels', component: ChannelsPageComponent },
  { path: 'websites', component: WebsitesPageComponent },
  { path: 'music', component: MusicPageComponent },
  { path: 'categories', component: CategoryPageComponent },
  { path: 'admin/editor', component: EditorComponent },
  { path: '**', component: MissingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
