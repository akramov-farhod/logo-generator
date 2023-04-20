class Shape {
  constructor() {
    this.color = "";
  }
  setColor(colorVar) {
    this.color = colorVar;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="95" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="190" height="190" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points=" 10,190 100,10 190,190 " fill="${this.color}" />`;
  }
}

export { Circle, Triangle, Square };
