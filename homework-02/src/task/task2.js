class Planet {
  constructor(name, diametr) {
    this.name = name;
    this.volume = (4 / 3) * Math.PI * (diametr / 2) ** 3;
  }

  getVolume() {
    return `Планета ${this.name} має об'єм ${this.volume}`;
  }
}

const planet = new Planet('Mars', 6800);

module.exports = { planet };
