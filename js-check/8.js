class Planet {
 
  constructor(options) {
    this.name = options.name;
    this.diameter = options.diameter;
    this.volume = (4/3*Math.PI)*(this.diameter/2^3);
  }
}
let planet = new Planet({
  name: 'Марс',
  diameter: '6779',
});
console.log("Планета " + planet.name, "має об'єм " + planet.volume);

class Earth extends Planet {}
let earth = new Earth ({
  name: 'Земля',
  diameter: '12756',
});
console.log("Планета " + earth.name, "має об'єм " + earth.volume);