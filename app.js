$(document).ready(function() {
    console.log('hi')
    var name;
    var choiceClass;
    var nameBG;
    var classBG;

    // RENAME MAIN PLAYER
    $(".buttonForGoodGuy").on('click', function() {
            name = $('.playerName').val();
            $('.confirmationSpot').append('<strong>' + name + '</strong>').toggleClass('hidden')
        })
        // RENAME BAD GUY
    $(".buttonForBadGuy").on('click', function() {
            nameBG = $('.enemyName').val();
            $('.confirmationSpotBG').append('<strong>' + nameBG + '</strong>').toggleClass('hidden')
        })
        //NEXT SCREEN GG Classes
    $('.toClasses').on('click', function() {
        $('.landingPage').toggleClass('hidden');
        $('.classPagePlayer').toggleClass('hidden');
    })

    // TO BAD GUY CLASS SELECTOR
    $('.toBGClasses').on('click', function() {
      $('.classPagePlayer').toggleClass('hidden');
      $('.classPageBagGuy').toggleClass('hidden');
    })
    // TO BATTLE GROUND
    $('.toBattleGround').on('click', function() {
      $('.classPageBagGuy').toggleClass('hidden');
      $('.battleGround').toggleClass('hidden');

    })
})
