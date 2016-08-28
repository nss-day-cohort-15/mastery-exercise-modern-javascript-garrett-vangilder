// CREATION OF THE DIFFERENT TYPES OF CLASSES
var RobotDome = (function(robotdome) {
    $(document).ready(function() {

        // INITIAL ROBOT
        robotdome.Robot = function() {
            this.name = '';
            this.type = null;
            this.subtype = null;
            this.health = 0;
            this.damage = 0;
        };

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
            this.type = 'Zombie Bot';
        };
        robotdome.ZombieRobot.prototype = new robotdome.Robot();
        //
        robotdome.SpaceRobot = function() {
            this.type = 'Space Bot';
        };
        robotdome.SpaceRobot.prototype = new robotdome.Robot();

        robotdome.CowboyRobot = function() {
            this.type = 'Cowboy Bot';
        };
        robotdome.CowboyRobot.prototype = new robotdome.Robot();

        // // 2 Specific Zombie Robot Types
        //
        robotdome.SkeletonBot = function() {
            this.subtype = 'Skeleton Robot';
            this.health = randomHealth(50, 175);
            this.damage = randomAttack(35, 50);
            this.image = '<img class="Photo" src="img/terminator.jpg" alt="skeleton" />';
        };
        robotdome.SkeletonBot.prototype = new robotdome.ZombieRobot();
        //
        robotdome.VampireBot = function() {
            this.subtype = 'Vampire Robot';
            this.health = randomHealth(40, 165);
            this.damage = randomAttack(45, 55);
            this.image = '<img class="Photo" src="img/spaceVampire.jpg" alt="vampire" />';
        };
        robotdome.VampireBot.prototype = new robotdome.ZombieRobot();
        // // 2 Specific Space Robot Types
        robotdome.SpaceCowboyBot = function() {
            this.subtype = 'Space Cowboy';
            this.health = randomHealth(75, 200);
            this.damage = randomAttack(40, 50);
            this.image = '<img class="Photo image" src="img/spaceCowboy.jpg" alt="vampire" />';
        };
        robotdome.SpaceCowboyBot.prototype = new robotdome.SpaceRobot();
        //
        robotdome.AstroBot = function() {
            this.subtype = "Astronaut";
            this.health = randomHealth(70, 190);
            this.damage = randomAttack(50, 60);
            this.image = '<img class="Photo" src="img/astroBot.jpg" alt="vampire" />';
        };
        robotdome.AstroBot.prototype = new robotdome.SpaceRobot();
        // // 2 Specific Cowboy Robot Types
        robotdome.RangerBot = function() {
            this.subtype = 'Ranger';
            this.health = randomHealth(50, 170);
            this.damage = randomAttack(60, 70);
            this.image = '<img class="Photo" src="img/spaceRanger.jpg" alt="vampire" />';
        };
        robotdome.RangerBot.prototype = new robotdome.CowboyRobot();

        robotdome.RodeoBot = function() {
            this.subtype = 'Rodeo Superstar';
            this.health = randomHealth(40, 160);
            this.damage = randomAttack(70, 80);
            this.image = '<img class="Photo" src="img/rodeoBot.jpg" alt="vampire" />';
        };
        robotdome.RodeoBot.prototype = new robotdome.CowboyRobot();
    });
    return robotdome;
})(RobotDome || {});
