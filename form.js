class Form{
    constructor(){
            this.input = createInput("name");
            this.button = createInput("player submitt your name NOW")
            this.greeting = createElement("h2")
    }

    display(){
        var title = createElement("h1")
        title.html("Car Racing GAME")
        title.position(130,0)
        this.input.position(130,160);
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            pc +=1
            player.index = pc
            player.update()
            player.updateCount(pc)
            this.greeting.html("Welcome "+ player.name+"NOW PLAY")
            this.greeting.position(130,100)
        })
    }
}