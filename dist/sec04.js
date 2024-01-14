"use strict";
/* ==========================
  section4 typescript function
 ========================== */
const getName = (u) => u.name;
const users = [
    { name: "hiroto", age: 25 },
    { name: "taka", age: 35 },
];
const names = users.map(getName);
console.log(names);
// 省略型
const users2 = [
    { name: "hiroto", age: 25 },
    { name: "taka", age: 35 },
];
const names2 = users2.map((u) => u.name);
console.log(names2);
// 他の配列メソッド
// 指定された配列の中から指定された関数で実装されているテストに合格した要素だけを抽出したシャローコピーを作成
const adultUsers = users.filter((u) => u.age >= 20);
console.log(adultUsers);
// 列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。
const allAdult = users.every((u) => u.age >= 20);
console.log(allAdult);
// some() は Array インスタンスのメソッドで、指定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が合格するかどうかを判定します。
const seniorExists = users.some((u) => u.age >= 60);
console.log(seniorExists);
// find() は Array インスタンスのメソッドで、提供されたテスト関数を満たす配列内の最初の要素を返します。 テスト関数を満たす値がない場合は、 undefined を返します。
const taka = users.find((u) => u.name.startsWith("taka"));
console.log(taka);
