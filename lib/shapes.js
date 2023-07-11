var svg = require('svg-builder')
    .width(300)
    .height(200);



class Square {
    // constructor() {
    //     this.height = 300;
    //     this.width = 200;   
    // }

    constructor(text, textcolor, shapecolor) {
      this.text = text;
      this.textcolor = textcolor;
      this.shapecolor = shapecolor;
      this.height = 300;
      this.width = 300;
    }

    render() {
        return svg.rect({
            fill: this.shapecolor,
            width: this.width,
            height: this.height,
            'stroke-width': 1,
            stroke: this.shapecolor,
            x: 0,
            y: 0,
        }).text({ x: '50%', y: '50%', stroke: this.textcolor, fill: this.textcolor, 'font-size': 100 }, this.text).render();
    }
}
  

  class Circle {
    constructor(text, textcolor, shapecolor)  {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
        // this.height = 300;
        // this.width = 300;
    }

    render() {
        return svg.circle({
                fill: this.shapecolor,
                r: 300,
                'stroke-width': 1,
                stroke: this.shapecolor,
                cx: 42,
                cy: 82,
            }).text({x: '50%', y: '50%', stroke: this.textcolor, fill: this.textcolor, 'font-size': 100}, this.text).render();}
    }

  class Triangle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
        this.height = 300;
        this.width = 300;
    }
    render() {
        return svg.rect({
            fill: this.shapecolor,
            width: this.width,
            height: this.height,
            'stroke-width': 1,
            stroke: this.shapecolor,
            x: 0,
            y: 0,
        }).text({ x: '50%', y: '50%', stroke: this.textcolor, fill: this.textcolor, 'font-size': 100 }, this.text).render();
    }
}
  

  module.exports = {
    Square, Circle, Triangle
  }