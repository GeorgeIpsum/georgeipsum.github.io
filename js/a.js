Pts.namespace(window);
Pts.quickStart( "#mast", "#B24C63" );

(function() {

  var chain = new Group();
  var stretch = false;

  space.add({ 
    animate: (time, ftime) => {
      // shorten the line when it's not stretching
      if (chain.length > ((stretch) ? 100 : 10)) chain.shift();

      form.strokeOnly("#fdd", 10).line( chain );
      form.fillOnly("#fee").point( space.pointer, 10, "circle")
    },

    action:( type, px, py ) => {
      // stretch the line when mouse is down
      if (type == "down") stretch = true;
      if (type == "up") stretch = false; 

      // add a point to the line when mouse moves
      if (type == "move") chain.push( new Pt(px, py) );  
    } 
  });
  
  //// ----
  

  space.bindMouse().bindTouch().play();

})();