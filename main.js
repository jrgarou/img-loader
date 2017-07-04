(function(){
  'use strict';
  var loadimages,
      imageloader = {
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

  loadimages = new ImageLoader(imageloader);
  loadimages.start();
}());
