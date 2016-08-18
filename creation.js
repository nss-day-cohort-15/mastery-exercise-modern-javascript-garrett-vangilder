var RobotDome = (function(robotdome) {
$(document).ready(function() {
  console.log('creation happening')

  $('.SkeletonGG').on('click',function() {
    player = new RobotDome.SkeletonBot();
    player.name = RobotDome.name;
    console.log(player)
  })

  $('.SkeletonBG').on('click',function() {
    badGuy = new RobotDome.SkeletonBot();
    badGuy.name = RobotDome.nameBG;
    console.log(badGuy)
  })

})
return robotdome
})(RobotDome|| {});
