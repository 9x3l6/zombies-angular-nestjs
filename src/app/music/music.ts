export interface Music {
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
