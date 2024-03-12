"use strict";
/* ===========================
  サバイバルTSの内容を復習
=========================== */
class Developer {
    think() {
        console.log("どういう実装にしようかな");
    }
}
class TypeScriptProgrammer {
    think() {
        console.log("どういうコードにしようかなー");
    }
    writeCode() {
        console.log("typeエイリアスとinterfaceの違いは。。。");
    }
}
const studentA = {
    name: "花子",
    age: 18,
    grade: 3
};
const teacher = {
    name: "田中先生",
    age: 30,
    students: [studentA],
};
