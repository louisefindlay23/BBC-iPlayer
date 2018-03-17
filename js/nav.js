var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init(); 

var headroom = new Headroom(elem, {
    "offset": 0,
    "tolerance": 0,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });
  headroom.init();
  
  // to destroy
  headroom.destroy();