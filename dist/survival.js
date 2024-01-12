"use strict";
/* ===========================
  サバイバルTSの内容を復習
=========================== */
/* number型 */
// 小数計算の誤差
console.log(0.1 + 0.2 === 0.3); // false
console.log(110 * 1.1); // 期待する結果 121 でも 121.00000000000001
/* null型 */
const x = null;
console.log(typeof x); // nullじゃなくてobject
/* undefined型 */
const y = undefined;
console.log(typeof y); // undefined
// nullとの違い
// nullは意図的に使わない限りは発生しない。APIの返り値がnullになることはある。
// JSON.stringifyでJSON化したときにundefinedは消えるけどnullは値が保持される
console.log(JSON.stringify({ foo: undefined }));
console.log(JSON.stringify({ foo: null }));
/* symbol型 */
