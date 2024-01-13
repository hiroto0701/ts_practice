"use strict";
/* ==========================
  section4 typescript function
 ========================== */
const calcBMI = function (human) {
    return human.weight / human.height ** 2;
};
// 分割代入することもできる
const calcBMI2 = function ({ height, weight }) {
    return weight / height ** 2;
};
const inagaki = {
    height: 1.75,
    weight: 64
};
console.log(calcBMI(inagaki));
console.log(calcBMI2(inagaki));
