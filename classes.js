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
        this.health = 50;
        this.damage = 100;
        this.image = '<img class="Photo" src="img/terminator.jpg" alt="enemy photo" />';
    }
    robotdome.SkeletonBot.prototype = new robotdome.ZombieRobot();
    //
    robotdome.VampireBot = function() {
        this.subtype = 'Vampire Robot';
        this.health = 40;
        this.damage = 120;
        this.image = '';
    }
    robotdome.VampireBot.prototype = new robotdome.ZombieRobot();
    // // 2 Specific Space Robot Types
    //
    robotdome.SpaceCowboyBot = function() {
        this.subtype = 'Space Cowboy'
        this.health = 100;
        this.damage = 50;
        this.image = '';
    }
    robotdome.SpaceCowboyBot.prototype = new robotdome.SpaceRobot();
    //
    robotdome.AstroBot = function() {
        this.subtype = "Astronaut";
        this.health = 90;
        this.damage = 60;
        this.image = '';
    }
    robotdome.AstroBot.prototype = new robotdome.SpaceRobot();
    //
    // // 2 Specific Cowboy Robot Types
    robotdome.RangerBot= function() {
        this.subtype = 'Ranger'
        this.health = 70;
        this.damage = 70;
        this.image = '';
    }
    robotdome.RangerBot.prototype = new robotdome.CowboyRobot();

    robotdome.RodeoBot = function() {
        this.subtype = 'Rodeo Superstar'
        this.health = 60;
        this.damage = Math.random() //80
        this.image = '';
    }
    robotdome.RodeoBot.prototype = new robotdome.CowboyRobot();

})
  return robotdome
})(RobotDome|| {});
