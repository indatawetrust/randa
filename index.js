const int = (min, max, size) => {
  let arr = [];

  let value = Math.floor(Math.random() * max - min + 1) + min;

  while (arr.length < (size || max)) {
    if (arr.indexOf(value) == -1) {
      arr.push(value);
    }

    value = Math.floor(Math.random() * max - min + 1) + min;
  }

  return arr;
};

const float = (min, max, size) => {
  let arr = [];

  let value = Math.random() * max - min + 1 + min;

  while (arr.length < (size || max)) {
    if (arr.indexOf(value) == -1) {
      arr.push(parseFloat(value.toFixed(2)));
    }

    value = Math.random() * max - min + 1 + min;
  }

  return arr;
};

const regex = (pattern, len, size) => {
  let arr = [];

  let value = Math.random().toString(36).slice(2, len + 2);

  while (arr.length < (size || max)) {
    if (arr.indexOf(value) == -1 && new RegExp(pattern).test(value)) {
      arr.push(value);
    }

    value = Math.random().toString(36).slice(2, len + 2);
  }

  return arr;
};

module.exports = {
  int,
  float,
  regex,
};
