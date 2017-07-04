(function(){
  var mycontent = document.getElementById('mycontent');
  var setup = {
    async: false,
    images: [
      'https://www.showmetech.com.br/wp-content/uploads/2016/10/google-amp-fast-speed-travel-ss-1920.jpg',
      'https://gweb-earth.storage.googleapis.com/assets/google_earth_banner.jpg',
      'http://images.immedia.com.br//26/26516_2_L.gif?c=201705291252',
    ],
    oncomplete: function (images) {
      console.log(images);
      var el = document.createElement('p');
      el.innerHTML = 'Done!';
      mycontent.appendChild(el);
    },
    onimageloaded: function (response) {
      console.log(response);
      var el = document.createElement('p');
      el.innerHTML = 'Loaded ' + response.index + '/' + setup.images.length + ' - ' + response.image.src;
      mycontent.appendChild(el);
    }
  };

  var loadimages = new ImgLoader(setup);
  loadimages.start();
}());
