function promise(timer, text) {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), timer);
  });
}

module.exports = promise(2000, 'Text');
