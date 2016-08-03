var makeSquareDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {'border-radius': 3, border: 'none', 'top': top, 'left': left};
  //'background-color': 'yellow'
  this.$node = $('<span class="makeDancer sponge"><img class="bob" src="bob.png" height=100% width=100%></span>');
  this.$node.css(this.styleSettings);
  this.vertMult = 1;
  this.horzMult = 1;

};
makeSquareDancer.prototype = Object.create(makeDancer.prototype);
makeSquareDancer.prototype.constructor = makeSquareDancer;


makeSquareDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  
  
  //debugger;

  if (this.top > ($('.DanceFloor').height() - 200)) {
    this.vertMult = -1;
  } else if (this.top < 50) {
    this.vertMult = 1;
  }
  
  if (this.left > ($('.DanceFloor').width() - 200)) {
    this.horzMult = -1;
    this.$node.css({transform: 'scale(-1, 1)'});
  } else if (this.left < 10) {
    this.horzMult = 1;
    this.$node.css({transform: 'scale(1,1)'});
  }
  
  this.top = this.top + 100 * this.vertMult;
  this.left = this.left + 100 * this.horzMult;
  this.$node.animate({height: '200px', 'width': '100px', 'top': this.top + 'px', 'left': this.left + 'px'});

  
  //this.$node.animate({'top': this.top + 'px', 'left': this.left + 'px'});

  this.$node.animate({width: '200px', 'height': '100px'});

  // this.$node.animate({'top': top + '50px', 'left': left + '20px'});
  
};
