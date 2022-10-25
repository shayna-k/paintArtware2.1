/* global app */
window.tools.mathRandom = {
  name: 'Math.random',
  icon: '/images/1.jpg',
  state: {
    selected: false,
    mousePresesd: false
    // other state properties go here
  },
  events: {
    mousedown: function (e, self) {
      self.state.mousePressed = true
    },
    mouseup: function (e, self) {
      self.state.mousePressed = false
    },
    mousemove: function (e, self) {
      // if self tool is selected AND the mouse is pressed
      if (self.state.selected && self.state.mousePressed) {
        const mouse = app.eventToMouse(e)
        // draw random integers between 0-9
        app.ctx.font = '48px sans serif'
        app.ctx.fillText(Math.floor(Math.random() * (9 - 0 + 1) + 0), mouse.x, mouse.y)
        app.ctx.fillStyle = 'black'
        app.ctx.stroke()
      }
    }
  }
}
