class Background {
    constructor(ctx) {
      this.ctx = ctx;
      this.w = this.ctx.canvas.width
      this.h = this.ctx.canvas.height
      this.x = 0
      this.y = 0
  
      this.vx = -2
  
      this.img = new Image()
      this.img.src = "img/background.png"
    }
  
    draw() {
      // TODO: draw image
      // TODO: draw image again on the right
    }
  
    move() {
      // TODO: move background
      // TODO: restart position if out of canvas
    }
  }