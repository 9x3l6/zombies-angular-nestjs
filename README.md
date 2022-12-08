# ZombiesAngularNestjs [https://zombies.cloud](https://zombies.cloud)

### Home page

![home page](./screenshots/home.png)

### Posts page

![posts](./screenshots/posts.png)

### Post page

![post](./screenshots/post.png)

### Videos page

![videos](./screenshots/videos.png)

### Video page

![video](./screenshots/video.png)

### Channels page

![channels](./screenshots/channels.png)

### Websites page

![websites page](./screenshots/websites.png)

### Admin Category

![admin category](./screenshots/admin-category.png)

### Admin Channel

![admin channel](./screenshots/admin-channel.png)

### Admin Post

![admin post](./screenshots/admin-post.png)

### Admin Video

![admin video](./screenshots/admin-video.png)

### Admin Website

![admin website](./screenshots/admin-website.png)

[https://stackblitz.com/edit/angular-zombies](https://stackblitz.com/edit/angular-zombies)

#### Install dependencies and run backend development

```shell
cd app && npm install && npm run build
cd api && npm install && npm run build && npx typeorm migration:run -d dist/typeorm-cli.config && npm run start:dev
```

Access https://localhost:3000 to see website, angular app using nestjs api.

Click links on pages to nagivate around the website

Access Admin https://localhost:3000/admin when no users exist any username and password is valid to login until at least one user exists.

Manage users, categories, posts, videos, channels and websites that show up on the website.
