var makeJellyDancer = function(top, left, timeBetweenSteps, dancers) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {'border-radius': 3, border: 'none', 'top': top, 'left': left};
  //'background-color': 'yellow'
  this.$node = $('<span class="makeDancer"><img class="jelly" src="jelly.png" height=100% width=100%></span>');
  this.$node.css(this.styleSettings);
  this.vertMult = 1;
  this.horzMult = 1;
  this.closestBob = [];
  this.setClosestBob(dancers);




};
makeJellyDancer.prototype = Object.create(makeDancer.prototype);
makeJellyDancer.prototype.constructor = makeJellyDancer;

makeJellyDancer.prototype.getBobDist = function (bob) {
  return Math.sqrt(Math.pow(this.top - bob.top, 2) + Math.pow(this.left - bob.left, 2));
};

makeJellyDancer.prototype.setClosestBob = function(dancers) {
  for (var i = 0; i < dancers.length; i++) {
    
    if (dancers[i].$node.hasClass('sponge')) {
      var dist = this.getBobDist(dancers[i]);
      if (this.closestBob[0] > dist || this.closestBob[0] === undefined) {
        this.closestBob[0] = dist;
        this.closestBob[1] = dancers[i];
      }
    }
  }
};

makeJellyDancer.prototype.step = function(dancers) {
  if (this.initiated === 0) {
    setInterval(function() { if (this.linedUp === false) { this.step(); } }.bind(this), this.timeBetweenSteps, dancers);
    this.initiated = 1;
  }
  // if (this.closestBob.length === 0 && dancers !== undefined) {
  //   this.setClosestBob(dancers);
  // }
  // if (this.closestBob[0] === undefined) {
  //   return;
  // }
  if (this.top > this.closestBob[1].top) {
    this.vertMult = -1;
  } else if (this.top < this.closestBob[1].top) {
    this.vertMult = 1;
  }
  
  if (this.left > this.closestBob[1].left) {
    this.horzMult = -1;
    this.$node.css({transform: 'scale(-1, 1)'});
  } else if (this.left < this.closestBob[1].left) {
    this.horzMult = 1;
    this.$node.css({transform: 'scale(1,1)'});
  }
  
  this.top = this.top + 75 * this.vertMult;
  this.left = this.left + 75 * this.horzMult;
  this.$node.animate({height: '200px', 'width': '100px', 'top': this.top + 'px', 'left': this.left + 'px'});

  
  //this.$node.animate({'top': this.top + 'px', 'left': this.left + 'px'});

  this.$node.animate({width: '200px', 'height': '100px'});

  // this.$node.animate({'top': top + '50px', 'left': left + '20px'});
  
};
