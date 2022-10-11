window.filters.sepia = {
    name: 'sepia',
    menu: 'Edit',
    run: function () {
        const imageData = app.ctx.getImageData(0, 0, app.canvas.width, app.canvas.height)
        const data = imageData.data
        for (let i = 0; i < data.length; i += 4) {
            
            // store r, g, b values
            r = data[i]
            g = data[i + 1]
            b = data[i + 2]

            // compute sepia values
            sepia_r = 0.393 * r + 0.769 * g + 0.189 * b
            sepia_g = 0.349 * r + 0.686 * g + 0.168 * b
            sepia_b = 0.272 * r + 0.534 * g + 0.131 * b

            // set values for pixels
            // red
            if (sepia_r > 255) {
                data[i] = 255;
            } else {
                data[i] = sepia_r;
            }

            // green
            if (sepia_g > 255) {
                data[i + 1] = 255;
            } else {
                data[i + 1] = sepia_g;
            }
            
            // blue
            if (sepia_b > 255) {
                data[i + 2] = 255;
            } else {
                data[i + 2] = sepia_b;
            }
        }
        app.ctx.putImageData(imageData, 0, 0)
    }
  }