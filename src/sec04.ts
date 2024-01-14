/* ==========================
  section4 typescript function
 ========================== */

 /* 4.1.1 関数宣言で関数を作る */
// //  function 関数名(引数): 返り値の型 {}
//  function range(min: number, max: number): number[] {
//   const result = [];
//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }
//   return result;
//  }

//  console.log(range(1,10));

// // 関数宣言はhoistingが起こる。
// // 関数宣言前に関数呼び出ししてもエラーにならない。これがホイスティング（巻き上げ）
// console.log(hoisting(1,9));

// function hoisting(x: number, y: number): number {
//   return x + y;
// }

/* 4.1.2 返り値のない関数 */
// // 返り値がない関数、例えばconsoleに表示させるだけの関数だったら返り値は void を指定する
// function greetingLoop(n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello");
//   }  
// }
// greetingLoop(10);

/* 4.1.3 関数式 */
// // function(引数): 返り値の型 {}
// // 関数名がない = 式 = 使用する場合は変数に入れて呼び出す
// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function(human: Human): number {
//   return human.weight / human.height ** 2;
// };
// // 分割代入することもできる
// const calcBMI2 = function({ height, weight }: Human): number {
//   return weight / height ** 2;
// };

// const inagaki: Human = {
//   height: 1.75,
//   weight: 64
// };
// console.log(calcBMI(inagaki));
// console.log(calcBMI2(inagaki));

/* 4.1.4 アロー関数式 */
// // (引数): 返り値の型 => {}
//  type Human = {
//   height: number;
//   weight: number;
// };

// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// }
// // 関数の中身が式一つのみだったら省略してかける
// const calcBMI2 = ({ height, weight }: Human): number =>  weight / height ** 2;


// const inagaki: Human = {
//   height: 1.75,
//   weight: 64
// };
// console.log(calcBMI(inagaki));

/* 4.1.6 メソッド記法で関数を作る */
// // プロパティ名(引数リスト): 返り値の型 {}
// const obj = {
//   double(num: number): number {
//     return num * 2;
//   },
//   // アロー関数も使える
//   double2: (num: number): number => num * 2,
// }
// const { double, double2 } = obj;
// console.log(double(5));
// console.log(double(100));

/* 4.1.7 可変長引数の宣言 */
// // 可変長引数 => 引数の数が明確に決まっていないときに使うよ
// // tsではrestパターンを使用することで可能になっている
// // rest引数を持つ場合、関数呼び出し時に自動的に配列が作られる
// // 引数の型は配列かタプル型
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// }

// console.log(sum(1, 3, 5)); // 9
// console.log(sum(2, 4, 6)); // 12
// console.log(sum()); // 0

// // rest引数は別の引数との併用も可能
// const sum2 = (base: number, ...args: number[]): number => {
//   let result = base * 1000;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// }

// console.log(sum2(10, 2, 5));
// console.log(sum2(123, 456));
// // console.log(sum2()); // Expected at least 1 arguments, but got 0.

/* 4.1.8 関数呼び出しにおけるスプレッド構文 */
// // 可変長引数を受け取る関数と一緒に使われることが多い
// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// }
// const nums: Array<number> = [1, 2, 3, 4, 5];
// console.log(sum(...nums));

// const sum2 = (a: number, b: number, c: number) => a + b + c;
// // スプレッド構文を使用する際は要素数は不明なはずなのでタプル型で要素数を明示する必要がある
// const nums2: number[] = [1, 2, 3];
// const nums3: [number, number, number] = [1, 2, 3];
// console.log(sum2(...nums2)); // error TS2556: A spread argument must either have a tuple type or be passed to a rest parameter.
// console.log(sum2(...nums3));

/* 4.1.10 コールバック関数 */
// // 関数の引数として関数を渡すことで、引数として渡される関数のことをコールバック関数という。
// type User = { name: string, age: number };
// const getName = (u: User): string => u.name;
// const users: User[] = [
//   { name: "hiroto", age: 25 },
//   { name: "taka", age: 35 },
// ];
// const names = users.map(getName);
// console.log(names);

// // 省略型
// const users2: User[] = [
//   { name: "hiroto", age: 25 },
//   { name: "taka", age: 35 },
// ];
// const names2 = users2.map((u: User): string => u.name);
// console.log(names2);

// // 他の配列メソッド（高階関数）
// // 指定された配列の中から指定された関数で実装されているテストに合格した要素だけを抽出したシャローコピーを作成
// const adultUsers = users.filter((u: User) => u.age >= 20);
// console.log(adultUsers);

// // 列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。
// const allAdult = users.every((u: User) => u.age >= 20);
// console.log(allAdult);

// // some() は Array インスタンスのメソッドで、指定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が合格するかどうかを判定します。
// const seniorExists = users.some((u :User) => u.age >= 60);
// console.log(seniorExists);

// // find() は Array インスタンスのメソッドで、提供されたテスト関数を満たす配列内の最初の要素を返します。 テスト関数を満たす値がない場合は、 undefined を返します。
// const taka = users.find((u: User) => u.name.startsWith("taka"));
// console.log(taka);


/* ==========================
  p.151 4.2 関数の型
 ========================== */
/* 4.2.1 関数型の記法 */
// 関数型は (引数リスト) => 返り値の型 という形を持つ。
const xRepeat = (num: number): string => "x".repeat(num);
//    ^^^^^^^ (num: number) => string <= 関数の型

// example
type F = (repeatNum: number) => string;
const aRepeat: F = (num: number): string => "a".repeat(num);