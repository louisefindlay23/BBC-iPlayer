var myElement = document.querySelector("header");
var headroom = new Headroom(myElement, {
    "offset": 65,
    "tolerance": 3
  });
headroom.init();