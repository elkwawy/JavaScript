// Assignment 2
let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
    if (i < start) console.log(end + "" + i);
    else console.log(""+i);

    if (i === 3) break;
}
// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03