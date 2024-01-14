// const message: string = "Hello, World!";
// console.log(message);

/* 3.4 オブジェクト */
// const fooObj : {
//   name: string;
//   age: number;
// } = {
//   name: "Mike",
//   age: 20
// }
// console.table(fooObj);

// type文 型を変数のように使用できる。もちろんオブジェクト以外にも使用可能
// type myObj = {
//   name: string;
//   gender: boolean;
//   age: number;
// };

// const hogeObj: myObj = {
//   name: "hiroto",
//   gender: false,
//   age: 25
// }

// interface
// interface FooBarObj {
//   name: string;
//   age: number;
// }
// const obj: FooBarObj = {
//   name: "taro",
//   age: 9
// }
// console.table(obj);

// 3.2.6 オプショナル
// type MyObj = {
//   foo: boolean;
//   bar: boolean;
//   baz?: number;
// }

// const a: MyObj = { foo: false, bar: true };
// const obj2: MyObj = { foo: true, bar: false, baz: 1234 };
// console.log(a.baz);

// 3.2.7 readonly
// type readonlyObj = {
//   readonly foo: number
// }

// const x: readonlyObj = { foo: 123 };
// x.foo = 0;

// 3.2.8 typeofキーワード
// const num: number = 0;
// type T = typeof num;
// const foo: T = 123;

// const obj = {
//   foo: 123,
//   bar: "hi"
// }
// type X = typeof obj;
// const obj2: X = {
//   foo: 20,
//   bar: ""
// };

// 3.4.1 型引数を持つ型を宣言
// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   son: Child;
// };

// 3.4.2 型引数を持つ型を使用する
// const obj: Family<number, string> = {
//   mother: 35,
//   father: 30,
//   son: "I'm a boy."
// };

// 3.4.3 部分型関係による型引数の制約
// type文において型引数を宣言するときextendsという構文を使うことができる。
// この構文は「この型引数は常に型の部分型でなければならない」という制約（constraint）を意味する
// type HasName = {
//   name: string;
// };
// type Family<Parent extends HasName, Child extends HasName> = {
//   mother: Parent;
//   father: Parent;
//   son: Child;
// }

// 以下の場合 number や string は HasName の部分型ではないためエラーとなる
// type Example = Family<number, string>
// error TS2344: Type 'number' does not satisfy the constraint 'HasName'.

// extendsの右側に書く制約には他の型引数を使うこともできる
// 次の例ではParentに渡される型はHasNameの部分型でなくてはならず、ChildはさらにParentの部分型でなければいけません。
// type Family<Parent extends HasName, Child extends Parent> = {
//   mother: Parent;
//   father: Parent;
//   son: Child;
// };

// // 3.4.4 オプショナルな型引数
// // 型引数の宣言時には省略可能な型引数を取ることができる
// // そのためには型引数の後ろに = 型名 とし、この型が省略された時のデフォルト値として扱われる。
// type Animal = {
//   name: string;
// };
// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   son: Child;
// }
// // 上記の例ではFamilyの型引数である ParentとChildはオプショナルな型引数です。
// // 通常通りの使い方
// type S = Family<string, string>;

// // Tは Family<Animal, Animal> と同義
// type T = Family;

// // Uは Family<string, Animal> と同義
// type U = Family<string>;



/* ====================== 
3.5 配列 
====================== */
// スプレッド構文使ってみよ
// const arr1 = [4, 5, 6];
// const arr2 = [1, 2, 3, ...arr1];
// console.log(arr2);

// /* 3.5.1 配列型の記法 */
// // OK
// const arr: number[] = [1, 10, 100];

// // NG
// const arr2: string[] = [1, 10, 100];

/* 3.5.3 配列型の記法 */
// 記述法には種類がある。
// T[] or Array<T> （ジェネリック型）
// 機能に違いはない
// const arr1: boolean[] = [true, false];
// const arr2: Array<{
//   name: string;
// }> = [
//   { 'name': "田中" },
//   { 'name': "山田" },
//   { 'name': "稲垣" },
// ];

/* 3.5.4 readonly配列型 */
// 内容を書き換えられない配列型
// 変更する必要がないものは積極的にreadonlyをつけることでエラーを回避する
// readonly T[] or ReadonlyArray<T> という書き方
// const arr: readonly number[] = [1, 10, 100];
// const arr2: ReadonlyArray<string> = ['string', 'example', 'readonly'];
// arr[1] = -500; error

/* 3.5.5 配列の機能を使う */
// pushのような元の要素を変えてしまうメソッド（破壊的メソッド）はreadonlyには使用不可
// const arr: Array<number> = [1, 10, 100];
// console.log(arr);
// arr.push(1000);
// console.log(arr);
// arr.push('string'); error

/* 3.5.6 for-of ループ */
// for (const 変数 of 式) {}
// phpでいう foreachに似ている
// const arr = [1, 10, 100];
// for (const e of arr) {
//   console.log(e);
// }

// const test = "Hello, world!"
// for (const elm of test) {
//   console.log(elm);
// }

/* 3.5.7 タプル型 */
// タプル型 => 要素数が固定された型。代わりに配列のそれぞれの要素に異なる型を与えることができる
// オブジェクトに似ている
// let tuple: [string, number] = ['hoge', 0];
// console.log(tuple);
// tuple = ['bar', 100];
// console.log(tuple);

// const str = tuple[0];
// const num = tuple[1];
// const nothing = tuple[2]; error TS2493: Tuple type '[string, number]' of length '2' has no element at index '2'.

// ラベル付きタプル型
// オブジェクトのプロパティみたいに定義できる。分かりやすいという理由以外で使用されない
// ただし要素へのアクセスは inagaki.name とかはだめ。あくまで配列だから
// type User = [name: string, age: number];
// const inagaki: User =["hiroto", 25];
// console.log(inagaki[0]);


/* ====================
  3.6分割代入 
===================== */
/* 3.6.1 基本的なパターン */
// ES2015 で登場
// オブジェクトから値を取り出して変数代入するという操作を簡単に書けるようになった
// オブジェクトの場合
// const item = {
//   price: 100,
//   shape: 'circle', 
// }
// const { price, shape } = item;
// // const price = item.price;
// // const shape = item.shape;
// console.log(price, shape);

// // 配列の場合
// const arr = [1, 10, 100];
// const[a, b, c] = arr;
// console.log(a, b, c);

// // 変数名をプロパティ名と別にしたい場合 => プロパティ名: 変数名 で定義する
// const color = {
//   r: 0,
//   g: 100,
//   b: 38,
//   a: 0.5
// };
// const {
//   r,
//   g: green,
//   b: hogehoge,
//   a: fugafuga,
// } = color;
// console.log(r, green, hogehoge, fugafuga);

// // 存在しないプロパティにアクセスすればエラーになる
// const obj = {
//   str: "Hello, world!",
//   num: 1234,
// };
// const { foo } = obj; // error TS2339: Property 'foo' does not exist on type '{ str: string; num: number; }'.

/* 3.6.2 ネストしたパターン */
// ネストした場合でも基本的に同じ
// const nested = {
//   num: 123,
//   str: "string",
//   obj: {
//     foo: "hello",
//     bar: "world",
//   }
// };
// const { num, obj } = nested;
// console.log(num);
// console.log(obj.foo);
// console.log(obj.bar);
// // 同じ意味になる
// const { obj: { foo, bar } } = nested;
// console.log(foo);
// console.log(bar);


/* 3.6.3 配列の分割代入 */
// const arr: Array<number> = [2, 3, 5, 7, 11];
// const [first, second, third, fourth] = arr;
// // 同じ意味
// // const first = arr[0];

// // 空白を使用して要素をスキップすることもできる
// const arr2: number[] = [1, 3, 5, 7, 9, 11];
// const [, foo, , bar, , hoge] = arr2;
// console.log(foo);
// console.log(bar);
// console.log(hoge);

// // タプル型に使用することが多い
// const me: [string, number] = ["inagaki", 25];
// const [myName, age] = me;
// console.log(myName);
// console.log(age);

/* 3.6.4 分割代入のデフォルト値 */
// 分割代入によって取得しようとしたプロパティの値がundefinedだった時のみにデフォルト値が適用される
// type Obj = { foo?: number };
// const obj1: Obj = {};
// const obj2: Obj = {
//   foo: -1234,
// };

// // 変数fooには500が代入される
// const { foo = 500 } = obj1;
// console.log(foo);

// // 変数barには-1234が代入される
// const { foo: bar = 500 } = obj2;
// console.log(bar);

// // undefined以外には適用されない
// const obj = { hoge: null };
// const { hoge = 100 } = obj;
// console.log(hoge); // nullが代入されている

/* 3.6.5 restパターンでオブジェクトの残りを取得する */
// const obj = {
//   foo: 123,
//   bar: "string",
//   baz: false,
// };

// const { foo, ...restObj } = obj; 

// console.log(foo);
// console.log(restObj);

// // 配列も同じ
// const arr: (string | number | boolean)[] = ["hello", 1, "world", 3, true, "ts", 5, false];
// const [first, second, third, ...hogehoge] = arr;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(hogehoge); 



/* ====================
  3.7その他の組み込みオブジェクト 
===================== */
/* 3.7.1 Dateオブジェクト */
// const date = new Date();
// console.log(date);

// const now = date.getTime();
// console.log(now);

/* ====================
  3.8力試し
===================== */
/* 3.8.1 データ処理 */
// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// }

// const data: string = `
// hiroto,25,1
// John Smith,19,0
// Taka,35,1
// `;

// const users: User[] = [];
// const lines = data.split("\n");
// // linesには以下のようなデータが代入される
// // lines[0] = "hiroto,25,1"
// // lines[1] = "John Smith,19,0"
// // lines[2] = "Taka,35,1"
// // lines[3] = ""  // 最後の改行による空の要素

// for (const line of lines) {
//   // lines[3]の空の要素をスキップする
//   if (line === "") {
//     continue;
//   }

//   const [name, ageString, premiumUserString] = line.split(",");
//   const age = Number(ageString);
//   const premiumUser = premiumUserString === "1";

//   users.push({
//     name,
//     age,
//     premiumUser
//   });
// }

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name}(${user.age})はプレミアムユーザです。`);
//   } else {
//     console.log(`${user.name}($${user.age})はプレミアムユーザではありません。`)
//   }
// }