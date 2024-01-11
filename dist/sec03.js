"use strict";
// const message: string = "Hello, World!";
// console.log(message);
const obj1 = {};
const obj2 = {
    foo: -1234,
};
// 変数fooには500が代入される
const { foo = 500 } = obj1;
console.log(foo);
// 変数barには-1234が代入される
const { foo: bar = 500 } = obj2;
console.log(bar);
const obj = { hoge: null };
const { hoge = 100 } = obj;
console.log(hoge);
