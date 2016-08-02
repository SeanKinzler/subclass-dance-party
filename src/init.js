$(document).ready(function() {
  window.dancers = [];

  $('.blinky').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      3000
    );
    dancers.push(dancer);
    dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step();
  });

  $('.excited').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('.DanceFloor').height() * Math.random(),
      $('.DanceFloor').width() * Math.random(),
      3000
    );
    dancers.push(dancer);
    dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step();
  });

  $('.square').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('.DanceFloor').height() * Math.random(),
      $('.DanceFloor').width() * Math.random(),
      3000
    );
    dancers.push(dancer);
    dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step();
  });

  $('.lineUpDancers').on('click', function(event) {
    var height = $('.DanceFloor').height();
    var spacing = height / (dancers.length + 1);
    for (var i = 0; i < dancers.length; i++) {
      dancers[i].lineUp(($('.DanceFloor').height() - spacing * (i + 1)));
    }
  });

  $('.DanceFloor').on('click', '.makeDancer', function(event) {
    debugger;
    if (this.offsetTop < ($('.DanceFloor').height() / 2 ) && this.offsetLeft < ($('.DanceFloor').width() / 2)) {
      this.css({top: '20px', left: '20px'});
    }

    //dancers[this.data].moveAside();
  });


});

