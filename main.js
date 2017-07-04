(function(){
  'use strict';

  var mycontent = document.getElementById('mycontent');
  var setup = {
    async: true,
    images: [
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-7.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-4.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-3.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-2.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-1.jpg',
    ],
    oncomplete: function (images) {
      createContent(mycontent, 'Done!', images);
    },
    onimageloaded: function (response) {
      createContent(mycontent, 'Loaded ' + (Number(response.index) + 1) + '/' + setup.images.length + ' - ' + response.image.src, response);
    }
  };

  function createContent(container, text, response) {
    var el = document.createElement('p');
    el.innerHTML = text;
    container.appendChild(el);
    if(response.image) container.appendChild(response.image);
    console.log(response);
  }

  var loadimages = new ImgLoader(setup);
  loadimages.start();
}());
