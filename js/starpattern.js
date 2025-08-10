// let n = 5;

// for (let i = 1; i <= n; i++) {
//   // console.log(i);
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row = row + " " + "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";

//   for (let j = 0; j <= i; j++) {
//     row = row + (i + 1);
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//   let row = "";
//   for (let j = 0; j < n - i; j++) {
//     row = row + (j + 1);
//   }
//   console.log(row);
// }

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";

//   //adding empty spaces
//   for (let j = 0; j < n - (i + 1); j++) {
//     row = row + "_";
//   }

//   //adding stars
//   for (let k = 0; k < i + 1; k++) {
//     row = row + "*";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     // console.log(i);
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row = row + " " + j;
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = "";

//     for (let j = 0; j <= i; j++) {
//         row = row + (i + 1);
//     }
//     console.log(row);
// }

// let n = 5;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n - i; j++) {
//         row = row + (j + 1);
//     }
//     console.log(row);
// }

// - - - - *
// - - - * *
// - - * * *
// - * * * *
// * * * * *

// let n = 6;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   let toggle = 1;

//   for (let j = 0; j < i + 1; j++) {
//     row = row + toggle;

//     // switch the toggle
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }

let n = 6;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;

    // switch the toggle
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
