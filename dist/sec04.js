"use strict";
/* ==========================
  section4 typescript function
 ========================== */
const double = (arg) => {
    console.log(arg * 2);
};
double.isUsed = true;
console.log(double.isUsed);
double(500);
