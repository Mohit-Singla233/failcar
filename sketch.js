var db, gs=0, pc, form, player, game, allPlayers
function setup(){
    db = firebase.database();
    createCanvas(500,500);
    game =  new Game();
    game.getState();
    game.start();

}

function draw(){
    console.log("HELLO")
    if(pc===2){
        game.updateState(1);
    }
    if(gs===1){
        clear ();
        game.play();
    }
}
