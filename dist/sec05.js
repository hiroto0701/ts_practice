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
// // #プロパティ名 とすることでプライベートプロパティにできる
// class User {
//   name: string;
//   #age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }
//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// const inagaki = new User('hiroto', 25);
// console.log(inagaki.name);  // hiroto
// console.log(inagaki.isAdult());  // true
// // console.log(inagaki.#age);  // Property '#age' is not accessible outside class 'User' because it has a private identifier.
/* 5.1.10 クラスの静的初期化ブロック */
// console.log('hello');
// class C {
//   static {
//     console.log('inagaki');
//   }
// }
// console.log('world');
// // hello
// // inagaki
// // world   の順で実行される
// // staticブロックはクラスの中なのでprivateやprotectedにアクセス可能
// class User {
//   #age: number = 0;
//   getAge() {
//     return this.#age;
//   }
//   setAge(age: number) {
//     if (age < 0 || age > 150) {
//       return;
//     }
//     this.#age = age;
//   }
// }
// // このままだとageが0〜150までの間でしか#ageに設定することができない
// // staticブロックを活用して制限を突破する
// class User2 {
//   static adminUser: User2;
//   static {
//     this.adminUser = new User2();
//     this.adminUser.#age = 9999;
//   }
//   #age: number = 0;
//   getAge() {
//     return this.#age;
//   }
//   setAge(age: number) {
//     if (age < 0 || age > 150) {
//       return;
//     }
//     this.#age = age;
//   }
// }
// console.log(User2.adminUser.getAge());  // 9999
// const inagaki = new User2();
// console.log(inagaki.getAge());  // 直接 #age を書き換えるわけではないから 0 
/* 5.1.11 型引数を持つクラス */
// class User<T> {
//   name: string;
//   #age: number;
//   readonly data: T;
//   constructor(name: string, age: number, data: T) {
//     this.name = name;
//     this.#age = age;
//     this.data = data;
//   }
//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// // inagaki は User<string型>
// const inagaki = new User<string>('inagaki', 25, "データだよ");
// const data = inagaki.data;
// // taka は User<{ num: number }>型
// const taka = new User('taka', 35, { num: 123 });
// const data2 = taka.data;
// /* Udemy 継承 */
// class Department {
//   #employees: Array<string> = [];
//   constructor(private readonly id: string, public name: string) {}
//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }
//   addEmployee(employee: string) {
//     this.#employees.push(employee);
//   }
//   printEmployeeInformation() {
//     console.log(this.#employees.length);
//     console.log(this.#employees);
//   }
// }
// const accounting = new Department('d1', 'Accounting');
// accounting.describe();
// accounting.addEmployee('Taka');
// accounting.printEmployeeInformation();
// // DepartmentクラスをもとにしたItDepartmentクラスを作成
// class ItDepartment extends Department {
//   // 特有の処理を記述してなくても継承元のメソッドやプロパティは問題なく使用できる。
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     // 他のクラスを継承したクラスで新たにコンストラクタを追加する際は
//     // superというキーワードを使って、継承元に情報を渡す必要がある。
//     super(id, 'IT');
//     this.admins = admins;
//   }
// }
// const it = new ItDepartment('d2', ['Max']);
// it.describe();
// it.addEmployee('Taka');
// it.printEmployeeInformation();
// console.table(it);
// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, 'Accounting');
//   }
//   addReport(text: string) {
//     this.reports.push(text);
//   }
//   printReport() {
//     console.log(this.reports);
//   }
// }
// const accounting3 = new AccountingDepartment('d2', []);
// accounting3.addReport('Something');
// accounting3.printReport();
// console.table(accounting3);
/* 5.2 クラスの型 */
/* 5.2.1 クラス宣言はインスタンスの型を作る */
// // class User {
// //   name: string = "";
// //   age: number = 0;
// //   isAdult(): boolean {
// //     return this.age >= 20;
// //   }
// // }
// // // 変数inagakiはUser型という型を持っている
// // const inagaki = new User();
// // // ただしこの挙動はクラス宣言だけ
// // const User = class {
// //   name: string = "";
// //   age: number = 0;
// //   isAdult(): boolean {
// //     return this.age >= 20;
// //   }
// // };
// // // これはOK
// // const inagaki = new User();
// // // error: 'User' refers to a value, but is being used as a type here. Did you mean 'typeof User'?
// // const taka: User = new User();
// // 型引数を使うと、型引数を持つ方が生成される
// class User<T> {
//   name: string;
//   #age: number;
//   readonly data: T;
//   constructor(name: string, age: number, data: T) {
//     this.name = name;
//     this.#age = age;
//     this.data = data;
//   }
// }
// const inagaki: User<string> = new User("hiroto", 25, "サッカー好き");
/* 5.2.2 newシグネチャによるインスタンス化可能性の表現 */
class User {
    constructor() {
        this.name = "";
        this.age = 0;
    }
}
// UserはMyConstructor型を持つ
const MyUser = User;
// MyUserはnewで使用可能
const u = new MyUser();
// uはUser型を持つ
console.log(u.name, u.age);
