var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="makeDancer gary"><img class="gary" src="Gary.png" height=30% width=30%></span>');
  this.styleSettings = {border: 'none', 'top': top, 'left': left};
  this.$node.css(this.styleSettings);
  this.horzMult = 1;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  
  
  if (this.left > ($('.DanceFloor').width() - 200)) {
    this.horzMult = -1;
    this.$node.css({transform: 'scale(-1,1)'});
  } else if (this.left < 50) {
    this.horzMult = 1;
    this.$node.css({transform: 'scale(1,1)'});
  }
  this.left = this.left + 50 * this.horzMult;
  this.$node.animate({left: this.left + 100 + 'px'}, 'slow');

  
  // this.$node.animate({left: this.left + 250 + 'px'}, 'slow');
};
