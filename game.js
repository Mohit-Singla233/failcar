class Game{
    constructor(){

    }

    getState(){
        db.ref("gameState").on("value", function (data){
            gs = data.val();
        })
    }

    updateState(state){
        db.ref("/").update({gameState : state})
    }

    async start(){
        if(gs === 0){
            player = new Player()
            var playerCountRef = await db.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                pc = playerCountRef.val();
                player.getCount()
            }
            form = new Form()
            form.display()
        }
    }

    play(){

    }
}