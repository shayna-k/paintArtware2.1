/* global app */
window.tools.gradientBrush = {
  name: 'gradientBrush',
  icon: '/images/gradient-icon.png',
  state: {
    selected: false,
    mousePressed: false,
    prevMouse: { x: null, y: null },
    baseColor: { g: 150, b: 150 }
  },
  getRandomColor: function () {
    return { g: Math.floor(Math.random() * 256), b: Math.floor(Math.random() * 256) }
  },
  events: {
    mousedown: function (e, self) {
      self.state.mousePressed = true
    },
    mouseup: function (e, self) {
      self.state.mousePressed = false
      self.state.prevMouse = { x: null, y: null }
      self.state.baseColor = self.getRandomColor()
    },
    mousemove: function (e, self) {
    // if self tool is selected AND the mouse is pressed
      if (self.state.selected && self.state.mousePressed) {
        const mouse = app.eventToMouse(e)
        const px = self.state.prevMouse.x || mouse.x
        const py = self.state.prevMouse.y || mouse.y

        // draw a line
        app.ctx.beginPath()
        app.ctx.moveTo(mouse.x, mouse.y)
        app.ctx.lineTo(px, py)
        app.ctx.closePath()
        app.ctx.stroke()
        for (let i = 0; i < 255; i++)
        {
          app.ctx.beginPath()
          app.ctx.moveTo(mouse.x + i, mouse.y)
          app.ctx.lineTo(px + i, py)
          app.ctx.closePath()
          app.ctx.strokeStyle = `rgb(${i},${self.state.baseColor.g}, ${self.state.baseColor.b})`
          app.ctx.stroke()
        }
        // update prevMouse coordinates
        self.state.prevMouse = { x: mouse.x, y: mouse.y }
      }
    }
  }
}
