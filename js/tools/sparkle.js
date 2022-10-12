/* global app */
window.tools.sparkle = {
  name: 'sparkle',
  icon: '/images/sparkle-icon.png',
  state: {
    selected: false,
    mousePressed: false
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
        // const px = self.state.prevMouse.x || mouse.x
        // const py = self.state.prevMouse.y || mouse.y
        const alpha = (2 * Math.PI) / 10
        const r = 5
        var star_pt = [mouse.x, mouse.y]

        app.ctx.beginPath()

        for (var i = 11; i != 0; i--) {
          var r_tmp = r * (i % 2 + 1)
          var omega = alpha * i
          app.ctx.lineTo((r_tmp * Math.sin(omega)) + star_pt[0], (r_tmp * Math.cos(omega)) + star_pt[1])
        }

        // app.ctx.moveTo(mouse.x, mouse.y)
        // app.ctx.lineTo(px, py)
        app.ctx.closePath()
        // app.ctx.fillStyle = "#000"
        app.ctx.fill()
        // app.ctx.stroke()
        // update prevMouse coordinates
        self.state.prevMouse = { x: mouse.x, y: mouse.y }
      }

      // if (self.state.selected && self.state.mousePressed) {
      //   const mouse = app.eventToMouse(e)
      //   const radius = Math.abs(Math.sin(Date.now() / 500) * 50)
      //   app.ctx.beginPath()
      //   app.ctx.arc(mouse.x, mouse.y, radius, 0, 2 * Math.PI, false)
      //   app.ctx.fill()
      //   app.ctx.fillStyle = 'white'
      //   // app.ctx.lineWidth = 5
      //   app.ctx.stroke()
      // }

    }
  }
}
