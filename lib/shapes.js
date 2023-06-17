var svg = require('svg-builder')
    .width(300)
    .height(200);

class Square {
    constructor(text, textcolor, shapecolor) {
      this.text = text;
      this.textcolor = textcolor;
      this.shapecolor = shapecolor;
      this.height = 300;
      this.width = 300;
    }

    render() {
        svg.rect({
            fill: this.shapecolor,
            width: this.width,
            height: this.height,
            'stroke-width': 1,
            stroke: this.shapecolor,
            x: 0,
            y: 0,
        }).text({ x: 10, y: 20, stroke: this.textcolor, fill: this.textcolor, 'font-size': 100 }).render();
    }
}
  

  class Circle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  class Triangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }