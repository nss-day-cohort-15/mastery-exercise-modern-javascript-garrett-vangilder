var RobotDome = (function(robotdome) {
    $(document).ready(function() {
        let name;
        let choiceClass;
        let nameBG;
        let classBG;

        $('.toClasses').prop('disabled', true);
        // RENAME MAIN PLAYER
        $(".buttonForGoodGuy").on('click', () => {
            robotdome.name = $('.playerName').val();
            $('.confirmationSpot').append('<strong>' + robotdome.name + '</strong>').toggleClass('hidden');
            $('.badGuyNameArea').toggleClass('hidden');
            $('.toClasses').toggleClass('hidden');
        });
        // RENAME BAD GUY
        $(".buttonForBadGuy").on('click', () => {
            robotdome.nameBG = $('.enemyName').val();
            $('.confirmationSpotBG').append('<strong>' + robotdome.nameBG + '</strong>').toggleClass('hidden');
            $('.toClasses').prop('disabled', false);
        });
        $('.toBGClasses').prop('disabled', true);
        //NEXT SCREEN GG Classes
        $('.toClasses').on('click', () => {
            $('.landingPage').toggleClass('hidden');
            $('.classPagePlayer').toggleClass('hidden');
        });

        // TO BAD GUY CLASS SELECTOR
        $('.toBGClasses').on('click', () => {
            $('.classPagePlayer').toggleClass('hidden');
            $('.classPageBagGuy').toggleClass('hidden');
        });
        // TO BATTLE GROUND
        $('.toBattleGround').prop('disabled', true);
        $('.toBattleGround').on('click', () => {
            $('.classPageBagGuy').toggleClass('hidden');
            $('.battleGround').toggleClass('hidden');

            // BATTLEGROUND FUNCTIONALITY
            $('.nameGG').append(player.name);
            $('.classGG').append(player.subtype);
            $('.healthGG').append(player.health);
            $('.playerImage').html(player.image);


            $('.nameBG').append(badGuy.name);
            $('.classBG').append(badGuy.subtype);
            $('.healthBG').append(badGuy.health);
            $('.BGImage').html(badGuy.image);
        });

        // BACK BUTTON FUNCTIONALITY
        $('.backToNames').on('click', () => {
            $('.landingPage').toggleClass('hidden');
            $('.classPagePlayer').toggleClass('hidden');
        });
        $('.backToGGClasses').on('click', () => {
            $('.classPagePlayer').toggleClass('hidden');
            $('.classPageBagGuy').toggleClass('hidden');
        });

        // PLAYER ATTACK FUNCTIONALITY
        robotdome.playerAttack = () => {
            badGuy.health = badGuy.health - player.damage;
            $('.healthBG').html(badGuy.health);
            robotdome.battleLogUpDateGG();
            if (player.health > 0 && badGuy.health > 0) {
                robotdome.badGuyAttack();
            }
            if (player.health <= 0) {
                alert('YOU LOSE');
                $('.battleLogUpDate').append(player.name + " was defeated by " + badGuy.name);
                $('.attack').prop('disabled', true);
            }
            if (badGuy.health <= 0) {
                alert('YOU WIN!');
                $('.battleLogUpDate').append(player.name + " defeated " + badGuy.name);
                $('.attack').prop('disabled', true);
            }
        };

        // BAD GUY ATTACK FUNCTIONALITY
        robotdome.badGuyAttack = () => {
            player.health = player.health - badGuy.damage;
            $('.healthGG').html(player.health);
            robotdome.battleLogUpDateBG();
            if (player.health <= 0) {
                $('.battleLogUpDate').append("YOU LOSE!");
                $('.attack').prop('disabled', true);

            }
        };

        // BATTLE LOG FUNCTIONALITY
        var roundCounter = 0;
        var battleMessage = '';

        robotdome.battleLogUpDateGG = () => {
            roundCounter++;
            battleMessage = 'Round ' + roundCounter + ': ' + player.name + ' attacks ' + badGuy.name + ' for ' + player.damage + ' damage.' + '<br>';
            $('.battleLogUpDate').append(battleMessage);
        };
        robotdome.battleLogUpDateBG = () => {
            battleMessage = 'Round ' + roundCounter + ': ' + badGuy.name + ' attacks ' + player.name + ' for ' + badGuy.damage + ' damage.' + '<br>';
            $('.battleLogUpDate').append(battleMessage);
        };


        $('.attack').on('click', () => {
            robotdome.playerAttack();
        });
    });
    return robotdome;
})(RobotDome || {});
