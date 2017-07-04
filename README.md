# img-loader

Javascript image loader.
It receives a url `string` or `array` of url `strings` and it loads `async` or not. It may return a callback `onimageloaded` for every image loaded and a callback `oncomplete` when all images have been done.

## Config
```
var setup = {
    async: false,
    images: [
      'https://www.showmetech.com.br/wp-content/uploads/2016/10/google-amp-fast-speed-travel-ss-1920.jpg',
      'https://gweb-earth.storage.googleapis.com/assets/google_earth_banner.jpg',
      'http://images.immedia.com.br//26/26516_2_L.gif?c=201705291252',
    ],
    oncomplete: function (images) {
      console.log(images);
    },
    onimageloaded: function (image) {
      console.log(image);
    }
  }
;

var loadimages = new ImgLoader(setup);
loadimages.start();

```
