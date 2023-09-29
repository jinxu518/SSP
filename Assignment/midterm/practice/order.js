setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
console.log("this is setTimeout 2");
process.nextTick(() =>
console.log("this is inner nextTick inside setTimeout")
);
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);
new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 1"));
new Promise(resolve => resolve('Hi')).then(() => console.log("this is Promise.resolve 2"));
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => console.log("this is process.nextTick 2"));

