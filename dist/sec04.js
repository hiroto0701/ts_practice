"use strict";
/* ==========================
  section4 typescript function
 ========================== */
const calcBMI = ({ height, weight }) => {
    return weight / height ** 2;
};
// 関数の中身が式一つのみだったら省略してかける
const calcBMI2 = ({ height, weight }) => weight / height ** 2;
const inagaki = {
    height: 1.75,
    weight: 64
};
console.log(calcBMI(inagaki));
