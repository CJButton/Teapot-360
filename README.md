# 360 degree Teapot viewer with Hotspots

## Goals:

-   360° viewer for rendered images to give a 3D effect
-   Learn basic NextJS
-   Try out TailwindCSS
-   Sidebar to allow for jumping to a specific frame
-   Focus on performance

### Installation and running

```console
$ npm install
```

```console
$ npm run dev
```

```console
$ npm run mock-server
```

Static files

```console
$ npm run files-server
```

You will also need to create a .env file with the following attributes:
IMAGE_HOSTNAME=127.0.0.1
IMAGE_PORT=3001
NEXT_PUBLIC_IMAGE_HOST=http://$IMAGE_HOSTNAME:$IMAGE_PORT
