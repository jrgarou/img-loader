function ImgLoader(options) {
  'use strict';
  console.log(options);
  this.async = options.async || true;
  this.images = {
    load: options.images,
    loaded: [],
  };
  this.callback = options.oncomplete || false;
  this.onimageloaded = options.onimageloaded || false;
  this.once = (typeof this.images.load === "string");
  this.done = (this.once) ? this.finish : this.complete;
  this.haslistener = window.addEventListener;
}

ImgLoader.prototype.load = function (src, index) {
  var self = this,
      image = new Image()
  ;

  if(this.haslistener) {
    image.addEventListener('load', function (e){
      self.loaded(index, this, e);
    });
  } else {
    image.attachEvent('onload', function (e){
      self.loaded(index, this, e);
    });
  }

  image.src = src;
};

ImgLoader.prototype.loaded = function (index, image, e) {
  if(!this.once && this.onimageloaded) this.onimageloaded({index: index, image: image});
  this.images.loaded.push(image);
  this.done();
};

ImgLoader.prototype.check = function () {
  return this.images.loaded.length < this.images.load.length;
};

ImgLoader.prototype.complete = function () {
  if(this.check()) {
    if(!this.async) this.load(this.images.load[this.images.loaded.length], this.images.loaded.length);
  } else {
    this.finish();
  }
};

ImgLoader.prototype.all = function () {
  for(var i in this.images.load) this.load(this.images.load[i], i);
};

ImgLoader.prototype.finish = function () {
  if(this.callback) this.callback(this.images.loaded);
};

ImgLoader.prototype.start = function () {
  if(this.once) {
    this.load(this.images.load, 0);
  } else {
    if(this.async) {
      this.all();
    } else {
      this.done();
    }
  }
};
