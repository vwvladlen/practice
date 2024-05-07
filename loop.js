let count = 5
while (count > 0) {
  count--
  if (count !== 2) {
    console.log(count)
  }
}

for (let i = 0; i < 3; i++) {
  console.log(i);
}

let a = 0;
while (a < 10) {
  console.log(a++);
}

let b = 0;
do {
  console.log(a++);
  }
while (b < 10);

//for in obj
const hash = {
  first: 7,
  second: 10,
  third: 1,
  fourth: 5,
};
hash.fifth = 2;
for (const key in hash){
  const value = hash[key];
  console.log(
    key, '\t', typeof key, '\t',
    value, '\t', typeof value
  );
}
