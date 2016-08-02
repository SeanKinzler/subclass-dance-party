var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {'border-color': 'green', 'background-color': 'green', 'border-radius': 0};
  this.$node.css(this.styleSettings);
  //debugger;
  // this.step.call(this);
};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = blinkyDancer.step;

makeSquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // debugger;
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //debugger;
  this.$node.animate({height: '100px', 'width': '50px'});
  this.$node.animate({width: '100px', 'height': '50px'});
  //setTimeout(function() { var a = 1 + 1; }, 500);
  // this.$node.animate({top: '500px'});
};
