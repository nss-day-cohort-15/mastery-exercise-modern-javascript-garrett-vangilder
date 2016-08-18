var RobotDome = (function(robotdome) {
$(document).ready(function() {
    console.log('hi')
    var name;
    var choiceClass;
    var nameBG;
    var classBG;

    // RENAME MAIN PLAYER
    $(".buttonForGoodGuy").on('click', function() {
            robotdome.name = $('.playerName').val();
            $('.confirmationSpot').append('<strong>' + robotdome.name + '</strong>').toggleClass('hidden')
        })
        // RENAME BAD GUY
    $(".buttonForBadGuy").on('click', function() {
            robotdome.nameBG = $('.enemyName').val();
            $('.confirmationSpotBG').append('<strong>' + robotdome.nameBG + '</strong>').toggleClass('hidden')
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

      // BATTLEGROUND FUNCTIONALITY
      $('.nameGG').append(player.name)
      $('.classGG').append(player.subtype)
      $('.healthGG').append(player.health)
      $('.playerImage').html(player.image)


      $('.nameBG').append(badGuy.name)
      $('.classBG').append(badGuy.subtype)
      $('.healthBG').append(badGuy.health)
      $('.BGImage').html(badGuy.image)
    })
    
    // PLAYER ATTACK FUNCTIONALITY
    robotdome.playerAttack = function() {
      if(player.health <= 0) {
        alert('YOU LOSE')
      }
      console.log('attack')
        player.health = player.health - badGuy.damage;
        $('.healthGG').html(player.health)
      }
      // BAD GUY ATTACK FUNCTIONALITY




      $('.attack').on('click', function() {
        robotdome.playerAttack();
        if (player.health > 0 && badGuy.health > 0) {
          robotdome.badGuyAttack();
        }
      })
})
return robotdome
})(RobotDome|| {});
