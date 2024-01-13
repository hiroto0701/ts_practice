/* ==========================
  section4 typescript function
 ========================== */

 /* 4.1.1 関数宣言で関数を作る */
// //  function 関数名(引数): 返り値の型 {}
//  function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
//  }

//  console.log(range(1,10));

// // 関数宣言はhoistingが起こる。
// // 関数宣言前に関数呼び出ししてもエラーにならない。これがホイスティング（巻き上げ）
// console.log(hoisting(1,9));

// function hoisting(x: number, y: number): number {
//   return x + y;
// }

/* 4.1.2 返り値のない関数 */
// 返り値がない関数、例えばconsoleに表示させるだけの関数だったら返り値は void を指定する
function greetingLoop(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("Hello");
  }  
}
greetingLoop(10);