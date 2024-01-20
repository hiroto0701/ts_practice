/* ==========================
  section5 typescript class
 ========================== */

/* 5.1.1 クラスの宣言とnew構文 */
// class User {
//   name: string = "";
//   age: number = 0;
// }

// const inagaki = new User();
// console.log(inagaki.name);
// console.log(inagaki.age);

// // オプショナルなプロパティ
// class Animal {
//   type?: string;
//   height: number = 0;
//   iscarnivore: boolean = true;
// }
// const lion = new Animal();
// console.log(lion.type);  // undefined

// // readonlyプロパティ
// class readOnly {
//   readonly name: string = "";
//   age: number = 0;
// }
// const readOnlyName = new readOnly();
// readOnlyName.name = "aaaaa"  // コンパイルエラー Cannot assign to 'name' because it is a read-only property.
