class Umbrella {
    cunstructor(){
        var stick = createSprite(100,200,10,20);
        var cover = createSprite(120,200,20,20);
        cover.ellipse(3);
    }

    var maxDrops=100;
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrop(random(0,400)));
    }

    if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
    }

    if(drops % 100 === 0){
        drops.velocity.y = -4;
    }
}