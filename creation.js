var RobotDome = (function(robotdome) {
$(document).ready(function() {
  console.log('creation happening')

  // GOOD GUY CLASS SELECTION
  $('.SkeletonGG').on('click',function() {
    player = new RobotDome.SkeletonBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  $('.VampireGG').on('click',function() {
    player = new RobotDome.VampireBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  $('.SpaceCowboyGG').on('click',function() {
    player = new RobotDome.SpaceCowboyBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  $('.AstroGG').on('click',function() {
    player = new RobotDome.AstroBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  $('.RangerGG').on('click',function() {
    player = new RobotDome.RangerBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  $('.RodeoGG').on('click',function() {
    player = new RobotDome.RodeoBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  // BAD GUY CLASS SELECTION
  $('.SkeletonBG').on('click',function() {
    badGuy = new RobotDome.SkeletonBot();
    badGuy.name = RobotDome.nameBG;
    console.log(badGuy)
  })

  $('.VampireBG').on('click',function() {
    badGuy = new RobotDome.VampireBot();
    player.name = RobotDome.name;
    console.log(badGuy)
  })

  $('.SpaceCowboyBG').on('click',function() {
    badGuy = new RobotDome.SpaceCowboyBot();
    badGuy.name = RobotDome.name;
    console.log(badGuy)
  })

  $('.AstroBG').on('click',function() {
    badGuy = new RobotDome.AstroBot();
    badGuy.name = RobotDome.name;
      console.log(badGuy)
  })

  $('.RangerBG').on('click',function() {
    badGuy = new RobotDome.RangerBot();
    badGuy.name = RobotDome.name;
      console.log(badGuy)
  })

  $('.RodeoBG').on('click',function() {
    badGuy = new RobotDome.RodeoBot();
    badGuy.name = RobotDome.name;
      console.log(badGuy)
  })


})
return robotdome
})(RobotDome|| {});
