var str = 'Hello how are you HEL';

console.log(str);
console.log(str.replace(/hel/gi, 'HI'));

var str = "javascript - это такой язык";
var result = str.match( /JAVA(SCRIPT)/i );
console.log( result );
console.log( result[0] ); // javascript (всё совпадение полностью)
console.log( result[1] ); // script (часть совпадения, соответствующая скобкам)
console.log( result.index ); // 0
console.log( result.input ); // javascript - это такой язык

var str = "javascript - это такой язык jaVascript";
var result = str.match( /JAVA(SCRIPT)/gi );
console.log( result );

var str = "Ой-йой-йой";
// результат match не всегда массив!
console.log(str.match(/лю/gi)) // ошибка! нет свойства length у null

// вывести и заменить все совпадения
function replacer(str, offset, s) {
  console.log( "Найдено: " + str + " на позиции: " + offset + " в строке: " + s );
  return str.toLowerCase();
}

var result = "ОЙ-Ой-ой".replace(/ой/gi, replacer);
console.log( 'Результат: ' + result ); // Результат: ой-ой-ой


//*//
function replacer(str, name, surname, offset, s) {
  return surname + ", " + name;
}

var str = "Василий Пупкин";

console.log (str.replace(/(Василий) (Пупкин)/, replacer)) // Пупкин, Василий

/**** */
console.log('****************');
var str = 'Многое по JavaScript можно найти на сайте http://javascript.ru';

var regexp = /javascript/ig;
var result;

console.log( "Начальное значение lastIndex: " + regexp.lastIndex );

while (result = regexp.exec(str)) {
  console.log( 'Найдено: ' + result[0] + ' на позиции:' + result.index );
  console.log( 'Свойство lastIndex: ' + regexp.lastIndex );
}

console.log( 'Конечное значение lastIndex: ' + regexp.lastIndex );