class Drop  {

    constructor() {
        friction: 0.1,
        stiffness: 0;
        var drops = createSprite(thix.x, this.y, 10,10);
        this.x = Math.random(1-20);
        this.y = Math.random(20-40);
      Drop.this.x;
      Drop.this.y;  
    }

    createEdges();

    drops.ellipse(4);
   
    if(drops.isTouching(bottom_edge)){
        drops.destroyEach();
    }
}