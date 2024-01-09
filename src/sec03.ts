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



/* 3.5 配列 */
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