//-------------------------------------------------for-------------------------------------------------
console.log('Example 1');

for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log('Example 2');

{
  let i = 0;
  for (; i < 3; i++) {
    console.log(i);
  }
}

console.log('Example 3');

{
  for (let i = 0; i < 3;) {
    console.log(i++);
  }
}

//-------------------------------------------------while-------------------------------------------------
let a = 0;
while (a < 10) {
  console.log(a++);
}

//-------------------------------------------------do while-------------------------------------------------
let i = 0;
do {
  console.log(i++);
} while (i < 10);

//-------------------------------------------------for in-------------------------------------------------
const hash = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
};

hash.fifth = 2;

Object.defineProperty(hash, 'newField', {
  enumerable: false,
  value: 'valueOfNewField',
});

Object.prototype.inheritedProperty = 'inherited';

for (const key in hash) {
  const value = hash[key];
  console.log(
    key, '\t', typeof key, '\t',
    value, '\t', typeof value
  );
}

//-------------------------------------------------for-in-array-------------------------------------------------
const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

Object.defineProperty(numbers, 'newField', {
  enumerable: false,
  value: 'valueOfNewField',
});

Object.prototype.inheritedProperty = 'inherited';

for (const i in numbers) {
  const value = numbers[i];
  console.log(i, typeof i, value);
}
//-------------------------------------------------for-of-------------------------------------------------
const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2';
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

for (const value of numbers) {
  console.log(value, typeof value);
}

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr[Symbol.iterator] = function() {
  let index = 0;
  const step = 2;
  return {
    next: () => {
      const result = {
        value: this[index],
        done: false
      };
      if (index >= this.length) {
        result.done = true;
        return result;
      }
      index += step;
      return result;
    }
  };
};

for (const value of arr) {
  console.log(value);
}
//-------------------------------------------------break-------------------------------------------------
const flag = false;

label1: {
  console.log(1);
  label2: {
    console.log(2);
    break label1;
    console.log(3);
  }
  console.log(4);
}
console.log(5);
//-------------------------------------------------continue-------------------------------------------------
let i = 0;
while (i < 10) {
  i++;
  console.log('Hello', i);
  if (i === 5) continue;
  console.log('World');
}
//-------------------------------------------------forEach-------------------------------------------------
const numbers = [7, 10, 1, 5, 2];
numbers.forEach((item, i, arr) => {
  console.log(i, arr, item);
});

[7, 10, 1].forEach((x) => {
  console.log(x);
});

[7, 10, 1].forEach((x) => console.log(x));

const log = (x) => console.log(x);

[7, 10, 1].forEach(log);
//-------------------------------------------------a-map-------------------------------------------------
const log = (s, i) => {
  console.log(i, s);
  return s;
};

const f1 = (x) => x * 2;
const f2 = (x) => ++x;

const compose = (...funcs) => (x) => funcs.reduce((v, f) => f(v), x);

const f3 = compose(f1, f2);

const res1 = [7, 10, 1, 5, 2]
  .filter((x) => x > 4)
  .map(f3)
  .reduce((acc, val) => acc + val);

console.log(res1);
console.log();

[7, 10, 1, 5, 2]
  .map(log)
  .map((x) => x * 2)
  .map(log)
  .map((x) => ++x)
  .map(log);
//-------------------------------------------------b-matrix-------------------------------------------------
const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

const max = (a, b) => (a > b ? a : b);

const res = matrix
  .map((row) => row.reduce(max))
  .reduce((acc, rowMax) => acc + rowMax);

console.log(res);

for (const row of matrix) {
  for (const item of row) {
    console.log(item);
  }
}

//-------------------------------------------------c-matrix-each-------------------------------------------------
const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

matrix.forEach((row, i) => {
  row.forEach((col, j) => {
    console.log(i, j, col);
  });
});

//-------------------------------------------------d-matrix-for-in-------------------------------------------------
const matrix = [
  [7, 10, 1, 5, 2],
  [6, -1, 7, 2, 3],
  [1, 2, 4, -8, 2],
  [-6, 4, 8, 2, 0],
];

for (const i in matrix) {
  const row = matrix[i];
  for (const j in row) {
    const col = row[j];
    console.log(i, j, col);
  }
}
//-------------------------------------------------e-reduce-------------------------------------------------
let count = 0;
const arr = [7, 10, 1, 5, 2];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum);
console.log({ res, count });

const reduce = (fn, acc, [cur, ...rest]) => (
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
);

const res2 = reduce(sum, 0, arr);
console.log({ res2 });
//-------------------------------------------------f-iterator-------------------------------------------------
const range = {
  start: 1,
  end: 10,
  [Symbol.iterator]() {
    let value = this.start;
    return {
      next: () => ({
        value,
        done: value++ === this.end + 1
      })
    };
  }
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

for (const number of range) {
  console.log(number);
}

const sum = (prev, cur) => prev + cur;
const sumIterable = (...iterable) => iterable.reduce(sum);

const sumRange = sumIterable(...range);
console.log('sumRange:', sumRange);
//-------------------------------------------------g-reverse-------------------------------------------------
const arr = [2, 5, -1, 7, 0];

arr[Symbol.iterator] = function() {
  let index = this.length;
  return {
    next: () => ({
      done: index-- === 0,
      value: this[index]
    })
  };
};

for (const number of arr) {
  console.log(number);
}
//-------------------------------------------------h-async-------------------------------------------------
const range = {
  start: 1,
  end: 1000,
  [Symbol.asyncIterator]() {
    let value = this.start;
    return {
      next: () => Promise.resolve({
        value,
        done: value++ === this.end + 1
      })
    };
  }
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

let k = 0;

const timer = setInterval(() => {
  console.log('next ', k++);
}, 10);

(async () => {
  for await (const number of range) {
    console.log(number);
  }
  clearInterval(timer);
})();

//-------------------------------------------------i-async-------------------------------------------------

const range = {
  start: 1,
  end: 1000,
  [Symbol.asyncIterator]() {
    let value = this.start;
    return {
      next: () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            value,
            done: value++ === this.end + 1
          });
        }, 0);
      })
    };
  }
};

console.dir({
  range,
  names: Object.getOwnPropertyNames(range),
  symbols: Object.getOwnPropertySymbols(range),
});

let k = 0;

const timer = setInterval(() => {
  console.log('next ', k++);
}, 10);

(async () => {
  for await (const number of range) {
    console.log(number);
  }
  clearInterval(timer);
})();
