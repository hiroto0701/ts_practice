/* ===========================
  サバイバルTSの内容を復習
=========================== */

/* number型 */
// // 小数計算の誤差
// console.log(0.1 + 0.2 === 0.3); // false
// console.log(110 * 1.1); // 期待する結果 121 でも 121.00000000000001

/* null型 */
// const x: null = null;
// console.log(typeof x); // nullじゃなくてobject

/* undefined型 */
// const y: undefined = undefined;
// console.log(typeof y); // undefined
// // nullとの違い
// // nullは意図的に使わない限りは発生しない。APIの返り値がnullになることはある。
// // JSON.stringifyでJSON化したときにundefinedは消えるけどnullは値が保持される
// console.log(JSON.stringify({ foo: undefined }));
console.log(JSON.stringify({ foo: null }));

/* symbol型 */
// // 一意の値を持つ型。
// // 中身が同じでも初期化した場所が違うと等価比較がfalseになる
// const s1: symbol = Symbol("foo");
// const s2: symbol = Symbol("foo");

// console.log(s1 === s1); // true
// console.log(s1 === s2); // false