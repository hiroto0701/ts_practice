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
// const obj = {
//   name: "ミネラルウォーター",
//   // キーと値に分けて書いたメソッド定義
//   printHello1: function() {
//     console.log("Hello");
//   },
//   // メソッド定義のショートハンド
//   printHello2() {
//     console.log("Hello");
//   }
// }

// // JS,TSではobjectのメソッドとフィールドの区別があいまい
// const calc = {
//   sum(a: number ,b: number): number {
//     return a + b;
//   },
// }
// console.log(calc.sum(1, 5));
// // calc.sum = null;
// calc.sum(1, 5); // 上でnull代入しているからメソッドはnullになってしまっている

/* オブジェクトの型注釈 */
// const box: {
//   width: number;
//   height: number;
// } = {
//   width: 100,
//   height: 500
// };

// // 型エイリアスもOK
// type Box = {
//   width: number;
//   height: number;
// };
// const box2: Box = {
//   width: 2,
//   height: 5
// };

// // メソッドの型注釈
// let calc: {
//   sum(x: number, y: number): number;
// }
// // これもOK
// let calc2: {
//   sum: (x: number, y: number) => number
// };
// calc = {
//   sum(x, y) {
//     return x + y;
//   }
// };

// // Record<Key, Type>
// // 連想配列のようなキーバリューのオブジェクトを定義する場合、ユーティリティ型のRecordを使う方法もある
// let foo: Record<string, number>;
// foo = {
//   a: 1,
//   b: 2
// };

/* オブジェクトの型のreadonlyプロパティ */
// let obj: {
//   readonly foo: number;
// };
// obj = { foo: 1 };
// obj.foo = 2; // Cannot assign to 'foo' because it is a read-only property.

// // readonlyが指定されたプロパティのみが読み取り専用になる。
// // 入れ子になっている場合、その入れ子までをreadonlyにする機能はない
// let obj: {
//   readonly foo: {
//     bar: number;
//   };
// };
// obj = {
//   foo: {
//     bar: 5,
//   },
// };
// // obj.foo = { bar: 1 }; // Cannot assign to 'foo' because it is a read-only property.
// obj.foo.bar = 1; // 入れ子を直接書き換えるのはOK

// // 一括で指定するのもアリ
// let obj2: Readonly<{
//   a: number;
//   b: string;
//   c: boolean;
// }>;
// obj2 = {
//   a: 1,
//   b: "hello",
//   c: true,
// }

/* オブジェクトの型のオプションプロパティ */
// let size: { width?: number };
// size = {}; // OK
// size = { width: undefined }; // ok
// size = { width: null } // ng Type 'null' is not assignable to type 'number | undefined'

/* インデックス型 */
// // オブジェクトが動的に変化し、キーの名前が事前にわからない場合や、キーの名前が柔軟であるべき場合に有用。
// let obj: {
//   [K: string]: number;
// };
// // フィールド名の表現部分が[K: string]です。このKの部分は型変数です。任意の型変数名にできます。Kやkeyにするのが一般的です。
// // stringの部分はフィールド名の型を表します。インデックス型のフィールド名の型はstring、number、symbolのみが指定できます
// obj = {
//   a: 1,
//   b: 2
// } // ok

// // インデックス型のオブジェクトであれば、フィールド名が定義されていないプロパティも代入できます
// obj.c = 4; // ok
// obj["d"] = 5; // ok

// // Record<K, T> を使っても同じ表現ができる 
// let obj2: Record<string, number>;

/* オブジェクトの分割代入 */
// const item = { price: 100 };
// // プロパティ名が変数として使える
// const { price } = item;
// console.log(price);

// type ColorObj = {
//   r?: number;
//   g: number;
//   b: number;
//   a: number | string;
// };
// const color: ColorObj = {
//   r: 0,
//   g: 100,
//   b: 125,
//   a: 0.5
// };
// const { r, g, b, a } = color;
// console.log(r, g, b, a);

// // 代入する変数名を変えることも可
// const { r: red, g: green, b: black, a: alpha } = color;

// // デフォルト値の指定
// // 分割代入では、=のあとにデフォルト値が指定できます。
// // デフォルト値は値が、undefinedのときに代入されます。
// type defaultObj = {
//   d?: number;
//   e: string;
//   f: null;
// };
// const example: defaultObj = {
//   d: undefined,
//   e: "hello",
//   f: null,
// };
// const { d = 1000, e = "default", f = false } = example;
// console.log(d, e, f); // 1000 hello null

/* shorthand property names */
// // オブジェクトのキーと変数名が同じ時に限り、ショートハンドが使える
// type Wild = {
//   pokeName: string;
//   no: number;
//   genre: string;
//   height: number;
//   weight: number;
// };

// const pokeName = "pikachu";
// const no = 25;
// const genre = "mouse pokemon";
// const height = 0.4;
// const weight = 0.6;

// // const pikachu: Wild = {
// //   pokeName: pokeName,
// //   no: no,
// //   genre: genre,
// //   height: height,
// //   weight: weight,
// // };

// // 上記の省略形
// const pikachu: Wild = {
//   pokeName,
//   no,
//   genre,
//   height,
//   weight,
// };
// console.table(pikachu);

/* オブジェクトのループ */
// // for...in
// const foo : {
//   a: number;
//   b: number;
//   c: number;
//   [key: string]: number;
// } = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (const item in foo) {
//   console.log(item, foo[item]);
// }


/* 配列のループ */
// // for-of文
// // 配列の要素をひとつひとつ処理する場合の処理
// const arr: string[] = ["a", "b", "c", "d"];
// for (const elem of arr) {
//   console.log(elem);
// }

// const arr2 = arr.map((elem) => elem + elem);
// console.log(arr2);


/* 配列のスプレッド構文 */
// // スプレッド構文を使わない場合
// const arr: number[] = [1, 2, 3];
// const arr2 = [];
// for (const item of arr) {
//   arr2.push(item);
// }
// arr2.push(4);
// console.log(arr2);  // 1, 2, 3, 4

// // スプレッド構文を使用する場合
// const arr3 = [...arr, 4];
// console.log(arr3);  // 1, 2, 3, 4


/* インターフェースを実装する */
// クラスがインターフェースを実装できる。
// 実装のためにはimplementsを使用する
interface Human {
  think(): void;
}

class Developer implements Human {
  think(): void {
    console.log("どういう実装にしようかな");
  }
}

// インターフェースを複数指定することも可能
interface Programmer {
  writeCode(): void;
}

class TypeScriptProgrammer implements Human, Programmer {
  think(): void {
    console.log("どういうコードにしようかなー")
  }

  writeCode(): void {
    console.log("typeエイリアスとinterfaceの違いは。。。")
  }
}