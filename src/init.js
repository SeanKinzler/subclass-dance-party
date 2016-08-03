$(document).ready(function() {
  window.dancers = [];

  $('.blinky').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('.DanceFloor').height() - 200) * Math.random(),
      ($('.DanceFloor').width() - 200) * Math.random(),
      1000
    );
    dancers.push(dancer);
    dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step();
  });

///// Patrick
/////////////
///////////

  $('.excited').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      ($('.DanceFloor').height() - 200) * Math.random(),
      ($('.DanceFloor').width() - 200) * Math.random(),
      850
    );
    dancers.push(dancer);
    dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step();
  });


//// Spongebob
//////////////
/////////////

  $('.square').on('click', function(event) {
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      ($('.DanceFloor').height() - 200) * Math.random(),
      ($('.DanceFloor').width() - 200) * Math.random(),
      850
    );
    dancers.push(dancer);
    //dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step();
  });

  /////////////
  /////JellyFish
  /////////////
  //////////////

  $('.jelly').on('click', function(event) {
    var noBob = true;
    for (var i = 0; i < dancers.length; i++) {
      if (dancers[i].$node.hasClass('sponge')) {
        noBob = false;
      }
    }

    if (noBob === true) {
      var dancerMakerFunctionName = 'makeSquareDancer';

      var dancerMakerFunction = window[dancerMakerFunctionName];
      var dancer = new dancerMakerFunction(
        ($('.DanceFloor').height() - 200) * Math.random(),
        ($('.DanceFloor').width() - 200) * Math.random(),
        850
      );
      dancers.push(dancer);
      //dancer.$node.data(dancers.length - 1);
      $('.DanceFloor').append(dancer.$node);
      dancer.step();
    }  
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      ($('.DanceFloor').height() - 200) * Math.random(),
      ($('.DanceFloor').width() - 200) * Math.random(),
      750, dancers
    );
    dancers.push(dancer);
    dancer.$node.data(dancers.length - 1);
    $('.DanceFloor').append(dancer.$node);
    dancer.step(dancers);
  });

////////
//other
/////////
///////////



  $('.lineUpDancers').on('click', function(event) {
    var height = $('.DanceFloor').height();
    var spacing = height / (dancers.length + 1);
    if (dancers[0].linedUp === false && dancers[0] !== undefined) {
      for (var i = 0; i < dancers.length; i++) {
        dancers[i].lineUp(($('.DanceFloor').height() - spacing * (i + 1)));
        dancers[i].linedUp = true;
      }
    } else {
      for (var i = 0; i < dancers.length; i++) {
        dancers[i].linedUp = false;
        if (dancers[i].$node.hasClass('pat')) {
          dancers[i].$node.animate({left: ($('.DanceFloor').width() - 200) * Math.random()});
        }
      }
    }

  });

  $('.DanceFloor').on('mouseover', 'img', function(event) {
    $(event.target).addClass('flipped');


    setTimeout(function(argument) {
      $(event.target).removeClass('flipped');
    }, 3000);

  });


});

