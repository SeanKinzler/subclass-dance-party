var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {'border-radius': 3, border: 'none', 'top': top, 'left': left};
  //'background-color': 'yellow'
  this.$node = $('<span class="makeDancer"><img class="bob" src="bob.png" height=100% width=100%></span>');
  this.$node.css(this.styleSettings);

};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;


makeSquareDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  
  this.$node.animate({height: '200px', 'width': '100px'});
  this.$node.animate({width: '200px', 'height': '100px'});
  
};
