/* ---------- EXO 1 ---------- */
// const likes = (names) => {
//   if (names.length === 0) return `No one likes this`;
//   else if (names.length === 1) return `${names[0]} likes this`;
//   else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
//   else if (names.length === 3)
//     return `${names[0]} ,${names[1]} and ${names[2]} like this`;
//   else if (names.length >= 4)
//     return `${names[0]} ,${names[1]} and ${names.length - 2} others like this`;
// };

// const names = ["Alex", "Jacob", "Mark", "Max"];

// likes(names);

/* ---------- EXO 2 ---------- */
// function solution(number) {
//   let total = 0;
//   for (var i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       total += i;
//       console.log(total);
//     }
//   }
//   return total;
// }

// solution(number);

/* ---------- EXO 3 ---------- */
// function digitalRoot(n) {
//   let result = 0;
//   String(n)
//     .split("")
//     .map((num) => {
//       result += Number(num);
//     });
//   console.log(result);
//   return result > 10 ? digital_root(result) : result;
// }

// digitalRoot(n);

/* ---------- EXO 4 ---------- */
function findOutlier(integers) {
  var evens = [];
  var odds = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evens.push(integers[i]);
    } else {
      odds.push(integers[i]);
    }
  }
  var evenLength = evens.length;
  var oddLength = odds.length;

  if (evenLength > oddLength) {
    return odds;
  } else {
    return evens;
  }
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
