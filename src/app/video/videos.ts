export interface Video {
  link: string;
  title: string;
  video_id: number;
  image_url: string;
  video_urls: {
    location: string;
    url: string;
  };
  duration: string;
  categories: [string];
}

export interface VIDEO_URL {
  location: string;
  url: string;
}

export interface VIDEO {
  link: string;
  video_id: number;
  image_url: string;
  video_urls: [VIDEO_URL];
  duration: string;
  categories: [string];
}