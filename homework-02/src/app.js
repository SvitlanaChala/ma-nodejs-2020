const {
  task1: job,
  task2: mission,
  task3,
} = require('./task/task1', './task/task2', './task/task3');

const boot = async () => {
  console.log(job.sum(2, 3, 4));
  console.log(mission.planet.getVolume());
  console.log(await task3);
};

boot();
