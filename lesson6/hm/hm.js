// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let lengthOne = 'hello world';
console.log(lengthOne.length);
let lengthTwo = 'Lorem ipsum'
console.log(lengthTwo.length);
let lengthThree = 'javascript is cool'
console.log(lengthThree.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let toUpperCase1 = 'hello world';
console.log(toUpperCase1.toUpperCase());
let toUpperCase2 = 'lorem ipsum';
console.log(toUpperCase2.toUpperCase());
let toUpperCase3 = 'javascript is cool';
console.log(toUpperCase3.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let toLowerCase1 = 'HELLO WORLD';
console.log(toLowerCase1.toLowerCase());
let toLowerCase2 = 'LOREM IPSUM';
console.log(toLowerCase2.toLowerCase());
let toLowerCase3 = 'JAVASCRIPT IS COOL'
console.log(toLowerCase3.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());  /*  console.log(str.trim().length);  */
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
str = 'Каждый охотник желает знать';
let Toarray = (str) => {
    console.log(str.split(' '));
}
Toarray(str)
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості
// символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
str = 'Каждый охотник желает знать';
let delete_characters = (str, length) => {
console.log(str.slice(0,length));
}
delete_characters(str,7)
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому
// всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
str = "HTML JavaScript PHP";
let insert_dash = (str) => {
    console.log(str.toUpperCase().replaceAll(' ', '-'));
}
insert_dash(str)
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у
// верхній.
function firstUp (str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(firstUp('some string'));
//


