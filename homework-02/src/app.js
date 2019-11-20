const { task1, task2 } = require('./task/task1', './task/task2');

const boot = async () => {
  console.log(task1.sum(2, 3, 4));
  console.log(task2.planet.getVolume());
};

boot();
