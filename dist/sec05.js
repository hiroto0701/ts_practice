"use strict";
/* ==========================
  section5 typescript class
 ========================== */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_age;
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
/* 5.1.4 constructor */
// // インスタンスが生成される際に呼び出される処理
// // 主な使い道はインスタンスのプロパティの初期化
// class User {
//   name: string;
//   age: number;
//   readonly isMen: boolean; 
//   constructor(name: string, age: number, isMen: boolean) {
//     this.name = name;
//     this.age = age;
//     // construct内ではreadonlyのプロパティに代入OK
//     // readonlyプロパティは「いったんオブジェクトができてしまったら変更不可」なので
//     // constructorはまだオブジェクトの生成中、だからOKという理解
//     this.isMen = isMen;
//   }
//   // method
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// const me = new User("hiroto", 25, true);
// console.log(me.name, me.age, me.isMen, me.isAdult());  // hiroto 25 true
/* 5.1.5 静的プロパティ、静的メソッド */
// // staticはインスタンスではなく、クラスそのものに属するプロパティ・メソッドのこと
// // Userクラスは staticな変数（adminName）と staticな関数（getAdminUser()）を持っている
// class User {
//   static adminName: string = "inagaki";
//   static getAdminUser() {
//     return new User(User.adminName, 25);
//   }
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   isAdult(): boolean {
//     return this.age >= 20;
//   } 
// }
// // インスタンスを作成するのではなく、直接UserクラスのstaticなプロパティとメソッドにアクセスするのはOK
// console.log(User.adminName);
// const admin = User.getAdminUser();
// console.log(admin.age);
// console.log(admin.name);
// // インスタンスを作成して、staticなプロパティや、メソッドにアクセスするのはNG
// const hiro = new User("hiro", 25);
// console.log(hiro.adminName);  // Property 'adminName' does not exist on type 'User'. Did you mean to access the static member 'User.adminName' instead?
// staticのメリットはインスタンスを生成せずにプロパティやメソッドにアクセスできる点
/* 5.1.6 3種類のアクセシビリティ修飾子 */
// // public private protectedの3種類。アクセシビリティ修飾子といいます。
// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public isAdult() {
//     return this.age >= 20;
//   }
// }
// const hiro = new User("hiro", 25);
// console.log(hiro.name);
// console.log(hiro.isAdult());
// // console.log(hiro.age); // Property 'age' is private and only accessible within class 'User'. 
// // private で定義されているプロパティ、メソッドはクラスの外からアクセスできない
// type inagaki = {
//   name: string;
//   age: number;
//   hobbies: string[];
// }
// const hiroto: inagaki = {
//   name: "hiroto",
//   age: 25,
//   hobbies: [
//     "soccer",
//     "game",
//     "programming"
//   ],
// };
// console.log(hiroto.name);
// console.log(hiroto.age);
// console.log(hiroto.hobbies[0]);
// console.log(hiroto.hobbies[2]);
/* 5.1.7 コンストラクタ引数でのプロパティ宣言 */
// // コンストラクタは受け取った引数をそのままプロパティの初期化に使用できる。
// // それをより簡単にするのが以下の記述方法
// // これが従来の記述方法
// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age:number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class User2 {
//   constructor(public name: string, private age: number) {}
// }
/* 5.1.8 クラス式でクラスを作成する */
// const User = class {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// // Userは今までと同様に使用可能
// const inagaki = new User('hiroto', 25);
// console.log(inagaki.name);  // hiroto
// console.log(inagaki.age);  // 25
/* 5.1.9 もう一つのプライベートプロパティ */
// #プロパティ名 とすることでプライベートプロパティにできる
class User {
    constructor(name, age) {
        _User_age.set(this, void 0);
        this.name = name;
        __classPrivateFieldSet(this, _User_age, age, "f");
    }
    isAdult() {
        return __classPrivateFieldGet(this, _User_age, "f") >= 20;
    }
}
_User_age = new WeakMap();
const inagaki = new User('hiroto', 25);
console.log(inagaki.name); // hiroto
console.log(inagaki.isAdult()); // true
// console.log(inagaki.#age);  // Property '#age' is not accessible outside class 'User' because it has a private identifier.
