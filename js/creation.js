var RobotDome = (function(robotdome) {
    $(document).ready(()=> {

        // GOOD GUY CLASS SELECTION
        $('.SkeletonGG').on('click', ()=> {
            player = new RobotDome.SkeletonBot();
            player.name = RobotDome.name;
            $('.toBGClasses').prop('disabled', false);
        });

        $('.VampireGG').on('click', ()=> {
            player = new RobotDome.VampireBot();
            player.name = RobotDome.name;
            $('.toBGClasses').prop('disabled', false);
        });

        $('.SpaceCowboyGG').on('click', ()=> {
            player = new RobotDome.SpaceCowboyBot();
            player.name = RobotDome.name;
            $('.toBGClasses').prop('disabled', false);
        });

        $('.AstroGG').on('click', ()=> {
            player = new RobotDome.AstroBot();
            player.name = RobotDome.name;
            $('.toBGClasses').prop('disabled', false);
        });

        $('.RangerGG').on('click', ()=> {
            player = new RobotDome.RangerBot();
            player.name = RobotDome.name;
            $('.toBGClasses').prop('disabled', false);
        });

        $('.RodeoGG').on('click', ()=> {
            player = new RobotDome.RodeoBot();
            player.name = RobotDome.name;
            $('.toBGClasses').prop('disabled', false);
        });

        // BAD GUY CLASS SELECTION
        $('.SkeletonBG').on('click', ()=> {
            badGuy = new RobotDome.SkeletonBot();
            badGuy.name = RobotDome.nameBG;
            $('.toBattleGround').prop('disabled', false);
        });

        $('.VampireBG').on('click', ()=> {
            badGuy = new RobotDome.VampireBot();
            badGuy.name = RobotDome.nameBG;
            $('.toBattleGround').prop('disabled', false);
        });

        $('.SpaceCowboyBG').on('click', ()=> {
            badGuy = new RobotDome.SpaceCowboyBot();
            badGuy.name = RobotDome.nameBG;
            $('.toBattleGround').prop('disabled', false);
        });

        $('.AstroBG').on('click', ()=> {
            badGuy = new RobotDome.AstroBot();
            badGuy.name = RobotDome.nameBG;
            $('.toBattleGround').prop('disabled', false);
        });

        $('.RangerBG').on('click', ()=> {
            badGuy = new RobotDome.RangerBot();
            badGuy.name = RobotDome.nameBG;
            $('.toBattleGround').prop('disabled', false);
        });

        $('.RodeoBG').on('click', ()=> {
            badGuy = new RobotDome.RodeoBot();
            badGuy.name = RobotDome.nameBG;
            $('.toBattleGround').prop('disabled', false);
        });
    });
    return robotdome;
})(RobotDome || {});
