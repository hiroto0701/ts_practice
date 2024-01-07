const message: string = "Hello, World!";
console.log(message);

// object
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