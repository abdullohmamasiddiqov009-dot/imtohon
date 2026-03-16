//==========================================================
// function sumToN(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) sum += i;
//   return sum;
// }

// //================================================
// function getRandom(a, b) {
//   let min = a < b ? a : b;
//   let max = a > b ? a : b;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //=============================================================
// function numberToText(n) {
//   let yuz = Math.floor(n / 100);
//   let on = Math.floor((n % 100) / 10);
//   let bir = n % 10;
//   let res = "";

//   switch (yuz) {
//     case 1:
//       res += "bir yuz ";
//       break;
//     case 2:
//       res += "ikki yuz ";
//       break;
//     case 3:
//       res += "uch yuz ";
//       break;
//     case 4:
//       res += "to'rt yuz ";
//       break;
//     case 5:
//       res += "besh yuz ";
//       break;
//     case 6:
//       res += "olti yuz ";
//       break;
//     case 7:
//       res += "yetti yuz ";
//       break;
//     case 8:
//       res += "sakkiz yuz ";
//       break;
//     case 9:
//       res += "to'qqiz yuz ";
//       break;
//   }

//   switch (on) {
//     case 1:
//       res += "o'n ";
//       break;
//     case 2:
//       res += "yigirma ";
//       break;
//     case 3:
//       res += "o'ttiz ";
//       break;
//     case 4:
//       res += "qirq ";
//       break;
//     case 5:
//       res += "ellik ";
//       break;
//     case 6:
//       res += "oltmish ";
//       break;
//     case 7:
//       res += "yetmish ";
//       break;
//     case 8:
//       res += "sakson ";
//       break;
//     case 9:
//       res += "to'qson ";
//       break;
//   }

//   switch (bir) {
//     case 1:
//       res += "bir";
//       break;
//     case 2:
//       res += "ikki";
//       break;
//     case 3:
//       res += "uch";
//       break;
//     case 4:
//       res += "to'rt";
//       break;
//     case 5:
//       res += "besh";
//       break;
//     case 6:
//       res += "olti";
//       break;
//     case 7:
//       res += "yetti";
//       break;
//     case 8:
//       res += "sakkiz";
//       break;
//     case 9:
//       res += "to'qqiz";
//       break;
//   }
//   return res.trim();
// }

// //===================================================
// function isPalindrome(n) {
//   let temp = n;
//   let reversed = 0;
//   while (temp > 0) {
//     reversed = reversed * 10 + (temp % 10);
//     temp = Math.floor(temp / 10);
//   }
//   return n === reversed;
// }
// // =================================================

// function isPrime(n) {
//   if (n < 2) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// // ========================================================
// function mySign(n) {
//   if (n > 0) return 1;
//   if (n < 0) return -1;
//   return 0;
// }

// //====================================================================
// function myPow(a, b) {
//   let res = 1;
//   for (let i = 0; i < b; i++) res *= a;
//   return res;
// }

// //==========================================================
// function capitalize(str) {
//   if (!str) return str;
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }