// Creates and returns a new makeDancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="makeDancer"></span>');
  this.styleSettings = {top: top, left: left};
  this.$node.css(this.styleSettings);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

};

  // use jQuery to create an HTML <span> tag
  

makeDancer.prototype.step = function() {
  // the basic makeDancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setInterval(function() { this.step(); }.bind(this), this.timeBetweenSteps);
};
  

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  
};

makeDancer.prototype.lineUp = function(spacing) {
  

  this.$node.animate({top: spacing + 'px', left: '100px'}, 'fast');
};

// makeDancer.prototype.moveAside = function(argument) {
//   if (this.$node.top < (window.height() / 2 ) && this.$node.left < (window.width() / 2)) {
//     this.$node.animate({top: '20px', left: '20px'});
//   }
  // window.width();

  


  // this.$node.animate({});
// };

  // now that we have defined the makeDancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

//  this.step();

  //this.setPosition(top, left);