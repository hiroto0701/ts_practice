"use strict";
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
// staticはインスタンスではなく、クラスそのものに属するプロパティ・メソッドのこと
// Userクラスは staticな変数（adminName）と staticな関数（getAdminUser()）を持っている
class User {
    static getAdminUser() {
        return new User(User.adminName, 25);
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 20;
    }
}
User.adminName = "inagaki";
// インスタンスを作成するのではなく、直接UserクラスのstaticなプロパティとメソッドにアクセスするのはOK
console.log(User.adminName);
const admin = User.getAdminUser();
console.log(admin.age);
console.log(admin.name);
// インスタンスを作成して、staticなプロパティや、メソッドにアクセスするのはNG
const hiro = new User("hiro", 25);
// console.log(hiro.adminName);  // Property 'adminName' does not exist on type 'User'. Did you mean to access the static member 'User.adminName' instead?
