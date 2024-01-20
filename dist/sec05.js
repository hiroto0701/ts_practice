"use strict";
/* ==========================
  section5 typescript class
 ========================== */
/* 5.1.1 クラスの宣言とnew構文 */
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
const inagaki = new User();
console.log(inagaki.name);
console.log(inagaki.age);
// オプショナルなプロパティ
class Animal {
    constructor() {
        this.height = 0;
        this.iscarnivore = true;
    }
}
const lion = new Animal();
console.log(lion.type);
