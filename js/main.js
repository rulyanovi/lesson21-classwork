[1, 2].forEach(console.log);

// console.log("Error now")
// [1, 2].forEach(console.log)

console.log( "No error now" );
[1, 2].forEach(console.log);

// boolean - логічний тип
var checked = true;
checked = false;

// null - ніщо чи значення невідоме
var age = null;

// undefined - значення не присвоєно
var x;
console.log(x);

// object
var user = {name: "Валєра", surname: "Магнум"};

// typeof
typeof undefined;
// "undefined"
typeof 0;
// "number"
typeof true;
// "boolean"
typeof "foo";
// "string"
typeof {};
// "object"
typeof null;
// "object" - офіційно визнана помилка в мові js
typeof function(){};
// "function" - не є окремим типом даних, зроблено для зручності

// бінарний +
console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
console.log(2 + 2 + '1'); // "41"
console.log(2 + '1' + 2); // "212"

console.log( 2 - '1' ); // 1
console.log( 6 / '2' ); // 3

// унарний +
console.log( +1 ); // 1
console.log( +(1 - 2) ); // -1

var apples = "2";
var oranges = "3";

console.log( +apples + +oranges ); //5

// присвоєння
var a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

// ++ --
var i = 2;
i++;      // i = i + 1.
console.log(i); // 3

var i = 2;
i--; // i = i - 1.
console.log(i); // 1

var i = 1;
var a = ++i; // префіксна форма - повертає нове значення
console.log(a); // 2

var i = 1;
var a = i++; // постфіксна форма - повертає старе значення
console.log(a); // 1

var i = 1;
console.log( 2 * ++i ); // 4

// скорочена орифметика
var n = 2;
n = n + 5;
n = n * 2;

var n = 2;
n += 5; // n=7 (n = n + 5)
n *= 2; // n=14 (n = n * 2)

console.log(n); // 14

var n = 2;
n *= 3 + 5;

console.log( n ); // 16  (n = 2 * 8)

// оператор ,
for (a = 1, b = 3, c = a*b; a < 10; a++) {
  console.log(a);
}

// логічні значення
console.log( 2 > 1 ); // true
console.log( 2 == 1 ); // false
console.log( 2 != 1 ); // true

console.log( '2' > 1 ); // true, 2 > 1
console.log( '01' == 1 ); // true, 1 == 1
console.log( false == 0 ); // true, false стає 0
console.log( true == 1 ); // true, true стає 1.

console.log( null > 0 ); // false
console.log( null == 0 ); // false

console.log(null >= 0); // true

console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false

// ===
console.log( 0 === false ); // false, різні типи даних
