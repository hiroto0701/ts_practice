"use strict";
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
// console.log(JSON.stringify({ foo: null }));
/* symbol型 */
// // 一意の値を持つ型。
// // 中身が同じでも初期化した場所が違うと等価比較がfalseになる
// const s1: symbol = Symbol("foo");
// const s2: symbol = Symbol("foo");
// console.log(s1 === s1); // true
// console.log(s1 === s2); // false
/* リテラル型 */
// // プリミティブ型の特定の値だけを代入可能にする型。
// let x: 1; // 1以外代入不可
// x = 1; // ok
// x = 100; // NG Type '100' is not assignable to type '1'.
// // プリミティブ型なら何でもOK
// const isTrue: true = true;
// const num: 1 | 2 | 3 = 3;
// const string: "hoge" = "hoge";
/* オブジェクトのプロパティ */
const obj = {
    name: "ミネラルウォーター",
    // キーと値に分けて書いたメソッド定義
    printHello1: function () {
        console.log("Hello");
    },
    // メソッド定義のショートハンド
    printHello2() {
        console.log("Hello");
    }
};
// JS,TSではobjectのメソッドとフィールドの区別があいまい
const calc = {
    sum(a, b) {
        return a + b;
    },
};
console.log(calc.sum(1, 5));
// calc.sum = null;
calc.sum(1, 5); // 上でnull代入しているからメソッドはnullになってしまっている
