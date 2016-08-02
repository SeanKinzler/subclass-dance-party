var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="makeDancer"><img class="gary" src="Gary.png" height=30% width=30%></span>');
  this.styleSettings = {'border-radius': 3, border: 'none', 'top': top, 'left': left};
  this.$node.css(this.styleSettings);
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
 
  this.$node.toggle();
};
