(function(){
  'use strict';

  var mycontent = document.getElementById('mycontent');
  var setup = {
    async: true,
    images: [
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-7.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-9.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-10.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-2.jpg',
      'http://www.sekonic.com/portals/0/articles/zuckerman_on_landscapes_shooting_the_sun_5-1.jpg',
    ],
    oncomplete: function (images) {
      createContent('entry two', mycontent, 'Done! All images have been loaded', images);
    },
    onimageloaded: function (response) {
      createContent('entry', mycontent, (Number(response.index) + 1) + '/' + setup.images.length + ' <br> ' + response.image.src, response);
    }
  };

  function createContent(klass, container, text, response) {
    var div = document.createElement('div'),
        p = document.createElement('p')
    ;

    p.innerHTML = text;
    div.appendChild(p);
    div.className = klass;

    if(response.image) div.appendChild(response.image);
    container.appendChild(div);
    console.log(response);
  }

  var loadimages = new ImgLoader(setup);
  createContent('entry two', mycontent, 'Start load...', false);
  loadimages.start();
}());
