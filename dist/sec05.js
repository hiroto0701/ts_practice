"use strict";
/* ==========================
  section5 typescript class
 ========================== */
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
function getPrice(customer) {
    // Userクラスのインスタンスだった場合に追加の処理を実施
    if (customer instanceof User) {
        if (customer.name === 'inagaki') {
            return 0;
        }
    }
    return customer.age < 18 ? 1000 : 100;
}
const customer1 = { age: 15 };
const customer2 = { age: 40 };
const inagaki = new User('inagaki', 25);
console.log(getPrice(customer1));
console.log(getPrice(customer2));
console.log(getPrice(inagaki));
