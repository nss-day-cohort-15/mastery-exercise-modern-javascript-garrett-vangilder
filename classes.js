// CREATION OF THE DIFFERENT TYPES OF CLASSES
var RobotDome = (function(robotdome) {
$(document).ready(function() {
    console.log('BATTLE FROG')

    // INITIAL ROBOT
    robotdome.Robot = function () {
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

  //   gauntlet.GuildHall.PlayerClass = function() {
  // this.name = "Beggar";
  // this.healthBonus = 0;
  // this.strengthBonus = 0;
  // this.intelligenceBonus = 0;
  // this.magical = false;

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
        this.damage = randomAttack(35,50);
        this.image = '<img class="Photo" src="img/terminator.jpg" alt="enemy photo" />';
    }
    robotdome.SkeletonBot.prototype = new robotdome.ZombieRobot();
    //
    robotdome.VampireBot = function() {
        this.subtype = 'Vampire Robot';
        this.health = randomHealth(40, 65);
        this.damage = randomAttack(45,55);
        this.image = '';
    }
    robotdome.VampireBot.prototype = new robotdome.ZombieRobot();
    // // 2 Specific Space Robot Types
    //
    robotdome.SpaceCowboyBot = function() {
        this.subtype = 'Space Cowboy'
        this.health = randomHealth(75, 100);
        this.damage = randomAttack(40,50);
        this.image = '';
    }
    robotdome.SpaceCowboyBot.prototype = new robotdome.SpaceRobot();
    //
    robotdome.AstroBot = function() {
        this.subtype = "Astronaut";
        this.health = randomHealth(70, 90);
        this.damage = randomAttack(50,60);
        this.image = '';
    }
    robotdome.AstroBot.prototype = new robotdome.SpaceRobot();
    //
    // // 2 Specific Cowboy Robot Types
    robotdome.RangerBot= function() {
        this.subtype = 'Ranger'
        this.health = randomHealth(50, 70);
        this.damage = randomAttack(60,70);
        this.image = '';
    }
    robotdome.RangerBot.prototype = new robotdome.CowboyRobot();

    robotdome.RodeoBot = function() {
        this.subtype = 'Rodeo Superstar'
        this.health = randomHealth(40, 60);
        this.damage = randomAttack(70,80);
        this.image = '';
    }
    robotdome.RodeoBot.prototype = new robotdome.CowboyRobot();

})
  return robotdome
})(RobotDome|| {});
