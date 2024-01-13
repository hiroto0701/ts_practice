"use strict";
/* ==========================
  section4 typescript function
 ========================== */
/* 4.1.1 関数宣言で関数を作る */
//  function 関数名(引数): 返り値の型 {}
function range(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
console.log(range(1, 10));
// 関数宣言はhoistingが起こる。
console.log(hoisting(1, 9));
function hoisting(x, y) {
    return x + y;
}
