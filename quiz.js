$(document).ready(function() {
  console.log('BATTLE FROG')

  // INITIAL ROBOT
  function Robot () {
    console.log('Robot ran')
    this.name = '';
    this.type = null;
    this.subtype = null;
    this.health = 0;
    this.damage = 0;
  }

  // 3 ROBOT TYPES
  function ZombieRobot () {
    console.log('ZombieRobots Created')
    this.type = 'Zombie Bot'
  }
  ZombieRobot.prototype = new Robot();

  function SpaceRobot () {
    console.log('SpaceRobots Created')
    this.type = 'Space Bot'
  }
  SpaceRobot.prototype = new Robot();

  function CowboyRobot () {
    console.log('CowboyRobots made')
    this.type = 'Cowboy Bot'
  }
  CowboyRobot.prototype = new Robot();

  // 2 Specific Zombie Robot Types

  function SkeletonBot () {
    this.subtype = 'Skeleton Robot'
    this.health = 50;
    this.damage = 100;
  }
  SkeletonBot.prototype = new ZombieRobot();

  function VampireBot () {
    this.subtype = 'Vampire Robot';
    this.health = 40;
    this.damage = 120;
  }
  VampireBot.prototype = new ZombieRobot();
  // 2 Specific Space Robot Types

  function SpaceCowboyBot () {
    this.subtype = 'Space Cowboy'
    this.health = 100;
    this.damage = 50;
  }
  SpaceCowboyBot.prototype = new SpaceRobot();

  function AstroBot () {
    this.subtype = "Astronaut";
    this.health = 90;
    this.damage = 60;
  }
  AstroBot.prototype = new SpaceRobot();

  // 2 Specific Cowboy Robot Types
  function RangerBot() {
    this.subtype = 'Ranger'
    this.health = 70;
    this.damage = 70;
  }
  RangerBot.prototype = new CowboyRobot();

  function RodeoBot() {
    this.subtype = 'Rodeo Superstar'
    this.health = 60;
    this.damage = 80;
  }
  RodeoBot.prototype = new CowboyRobot();

})
