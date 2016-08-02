var makeExcitedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings['border-color'] = 'blue';
  this.$node.css(this.styleSettings);
  
};
makeExcitedDancer.prototype = Object.create(makeDancer.prototype);
makeExcitedDancer.prototype.constructor = makeExcitedDancer;


makeExcitedDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
 
  this.$node.fadeIn().animate({top: this.top + 150 + 'px'});

  this.$node.animate({top: '500px'});
};
