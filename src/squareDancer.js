var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {'border-color': 'green', 'background-color': 'green', 'border-radius': 0};
  this.$node.css(this.styleSettings);

};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;


makeSquareDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  
  //this.$node.animate({height: '100px', 'width': '50px'});
  //this.$node.animate({width: '100px', 'height': '50px'});
  
};
