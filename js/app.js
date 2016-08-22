// CREATION OF THE DIFFERENT TYPES OF CLASSES
var RobotDome = (function(robotdome) {
    $(document).ready(function() {
        console.log('BATTLE FROG')

        // INITIAL ROBOT
        robotdome.Robot = function() {
                console.log('Robot ran')
                this.name = '';
                this.type = null;
                this.subtype = null;
                this.health = 0;
                this.damage = 0;
            }
            // Returns a random integer between min (included) and max (excluded)
            // Using Math.round() will give you a non-uniform distribution!
        function randomHealth(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function randomAttack(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }



        // 3 ROBOT TYPES
        robotdome.ZombieRobot = function() {
            console.log('ZombieRobots Created')
            this.type = 'Zombie Bot'
        }
        robotdome.ZombieRobot.prototype = new robotdome.Robot();
        //
        robotdome.SpaceRobot = function() {
            console.log('SpaceRobots Created')
            this.type = 'Space Bot'
        }
        robotdome.SpaceRobot.prototype = new robotdome.Robot();

        robotdome.CowboyRobot = function() {
            console.log('CowboyRobots made')
            this.type = 'Cowboy Bot'
        }
        robotdome.CowboyRobot.prototype = new robotdome.Robot();

        // // 2 Specific Zombie Robot Types
        //
        robotdome.SkeletonBot = function() {
            this.subtype = 'Skeleton Robot'
            this.health = randomHealth(50, 75);
            this.damage = randomAttack(35, 50);
            this.image = '<img class="Photo" src="img/terminator.jpg" alt="skeleton" />';
        }
        robotdome.SkeletonBot.prototype = new robotdome.ZombieRobot();
        //
        robotdome.VampireBot = function() {
            this.subtype = 'Vampire Robot';
            this.health = randomHealth(40, 65);
            this.damage = randomAttack(45, 55);
            this.image = '<img class="Photo" src="img/spaceVampire.jpg" alt="vampire" />';
        }
        robotdome.VampireBot.prototype = new robotdome.ZombieRobot();
        // // 2 Specific Space Robot Types
        //
        robotdome.SpaceCowboyBot = function() {
            this.subtype = 'Space Cowboy'
            this.health = randomHealth(75, 100);
            this.damage = randomAttack(40, 50);
            this.image = '<img class="Photo image" src="img/spaceCowboy.jpg" alt="vampire" />';
        }
        robotdome.SpaceCowboyBot.prototype = new robotdome.SpaceRobot();
        //
        robotdome.AstroBot = function() {
            this.subtype = "Astronaut";
            this.health = randomHealth(70, 90);
            this.damage = randomAttack(50, 60);
            this.image = '<img class="Photo" src="img/astroBot.jpg" alt="vampire" />';

        }
        robotdome.AstroBot.prototype = new robotdome.SpaceRobot();
        //
        // // 2 Specific Cowboy Robot Types
        robotdome.RangerBot = function() {
            this.subtype = 'Ranger'
            this.health = randomHealth(50, 70);
            this.damage = randomAttack(60, 70);
            this.image = '<img class="Photo" src="img/spaceRanger.jpg" alt="vampire" />';

        }
        robotdome.RangerBot.prototype = new robotdome.CowboyRobot();

        robotdome.RodeoBot = function() {
            this.subtype = 'Rodeo Superstar'
            this.health = randomHealth(40, 60);
            this.damage = randomAttack(70, 80);
            this.image = '<img class="Photo" src="img/rodeoBot.jpg" alt="vampire" />';
        }
        robotdome.RodeoBot.prototype = new robotdome.CowboyRobot();

    })
    return robotdome
})(RobotDome || {});

var RobotDome = (function(robotdome) {
    $(document).ready(function() {
        console.log('creation happening')

        // GOOD GUY CLASS SELECTION
        $('.SkeletonGG').on('click', function() {
            player = new RobotDome.SkeletonBot();
            player.name = RobotDome.name;
            console.log(player)
            $('.toBGClasses').prop('disabled', false);

        })

        $('.VampireGG').on('click', function() {
            player = new RobotDome.VampireBot();
            player.name = RobotDome.name;
            console.log(player)
            $('.toBGClasses').prop('disabled', false);

        })

        $('.SpaceCowboyGG').on('click', function() {
            player = new RobotDome.SpaceCowboyBot();
            player.name = RobotDome.name;
            console.log(player)
            $('.toBGClasses').prop('disabled', false);

        })

        $('.AstroGG').on('click', function() {
            player = new RobotDome.AstroBot();
            player.name = RobotDome.name;
            console.log(player)
            $('.toBGClasses').prop('disabled', false);

        })

        $('.RangerGG').on('click', function() {
            player = new RobotDome.RangerBot();
            player.name = RobotDome.name;
            console.log(player)
            $('.toBGClasses').prop('disabled', false);

        })

        $('.RodeoGG').on('click', function() {
            player = new RobotDome.RodeoBot();
            player.name = RobotDome.name;
            console.log(player)
            $('.toBGClasses').prop('disabled', false);

        })

        // BAD GUY CLASS SELECTION
        $('.SkeletonBG').on('click', function() {
            badGuy = new RobotDome.SkeletonBot();
            badGuy.name = RobotDome.nameBG;
            console.log(badGuy)
            $('.toBattleGround').prop('disabled', false)

        })

        $('.VampireBG').on('click', function() {
            badGuy = new RobotDome.VampireBot();
            badGuy.name = RobotDome.nameBG;
            console.log(badGuy)
            $('.toBattleGround').prop('disabled', false)

        })

        $('.SpaceCowboyBG').on('click', function() {
            badGuy = new RobotDome.SpaceCowboyBot();
            badGuy.name = RobotDome.nameBG;
            console.log(badGuy)
            $('.toBattleGround').prop('disabled', false)

        })

        $('.AstroBG').on('click', function() {
            badGuy = new RobotDome.AstroBot();
            badGuy.name = RobotDome.nameBG;
            console.log(badGuy)
            $('.toBattleGround').prop('disabled', false)

        })

        $('.RangerBG').on('click', function() {
            badGuy = new RobotDome.RangerBot();
            badGuy.name = RobotDome.nameBG;
            console.log(badGuy)
            $('.toBattleGround').prop('disabled', false)

        })

        $('.RodeoBG').on('click', function() {
            badGuy = new RobotDome.RodeoBot();
            badGuy.name = RobotDome.nameBG;
            console.log(badGuy)
            $('.toBattleGround').prop('disabled', false)

        })


    })
    return robotdome
})(RobotDome || {});

var RobotDome = (function(robotdome) {
    $(document).ready(function() {
        console.log('hi')
        var name;
        var choiceClass;
        var nameBG;
        var classBG;

        $('.toClasses').prop('disabled', true);
        // RENAME MAIN PLAYER
        $(".buttonForGoodGuy").on('click', function() {
                robotdome.name = $('.playerName').val();
                $('.confirmationSpot').append('<strong>' + robotdome.name + '</strong>').toggleClass('hidden')
                $('.badGuyNameArea').toggleClass('hidden');
                $('.toClasses').toggleClass('hidden');
            })
            // RENAME BAD GUY
        $(".buttonForBadGuy").on('click', function() {
                robotdome.nameBG = $('.enemyName').val();
                $('.confirmationSpotBG').append('<strong>' + robotdome.nameBG + '</strong>').toggleClass('hidden')
                  $('.toClasses').prop('disabled', false);
            })
            $('.toBGClasses').prop('disabled', true);
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
            $('.toBattleGround').prop('disabled', true)
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

        // BACK BUTTON FUNCTIONALITY
        $('.backToNames').on('click', function() {
          $('.landingPage').toggleClass('hidden');
          $('.classPagePlayer').toggleClass('hidden');
        })
        $('.backToGGClasses').on('click', function() {
          $('.classPagePlayer').toggleClass('hidden')
          $('.classPageBagGuy').toggleClass('hidden')
        })

        // PLAYER ATTACK FUNCTIONALITY
        robotdome.playerAttack = function() {
            badGuy.health = badGuy.health - player.damage;
            $('.healthBG').html(badGuy.health)
            robotdome.battleLogUpDateGG();
            if (player.health > 0 && badGuy.health > 0) {
                robotdome.badGuyAttack();
            }
            if (player.health <= 0) {
                alert('YOU LOSE');
                $('.battleLogUpDate').append( player.name +" was defeated by " + badGuy.name );
                $('.attack').prop('disabled', true);
            }
            if (badGuy.health <= 0) {
                alert('YOU WIN!');
                $('.battleLogUpDate').append( player.name + " defeated " + badGuy.name);
                $('.attack').prop('disabled', true);

            }
        }

        // BAD GUY ATTACK FUNCTIONALITY
        robotdome.badGuyAttack = function() {
            player.health = player.health - badGuy.damage;
            $('.healthGG').html(player.health)
            robotdome.battleLogUpDateBG();
            if (player.health <= 0) {
                alert('YOU LOSE!' + '<br>')
                $('.battleLogUpDate').append("YOU LOSE!");
                $('.attack').prop('disabled', true);

            }
        }

        // BATTLE LOG FUNCTIONALITY
        var roundCounter = 0;
        var battleMessage= '';

        robotdome.battleLogUpDateGG = function() {
          roundCounter++
          battleMessage = 'Round ' + roundCounter + ': ' + player.name + ' attacks ' +  badGuy.name + ' for ' + player.damage + ' damage.'+ '<br>';
          $('.battleLogUpDate').append(battleMessage);
        }
        robotdome.battleLogUpDateBG = function() {
          battleMessage = 'Round ' + roundCounter + ': ' + badGuy.name + ' attacks ' +  player.name + ' for ' + badGuy.damage + ' damage.'+ '<br>';
          $('.battleLogUpDate').append(battleMessage);
        }


        $('.attack').on('click', function() {
            robotdome.playerAttack();
        })
    })
    return robotdome
})(RobotDome || {});
