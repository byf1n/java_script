// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
const sPar = (a, b) => {
    return a * b;
}
console.log(sPar(10, 20));
document.write(`Площа прямокутника : ${sPar(10,20)}`);
// - створити функцію яка обчислює та повертає площу кола
const sCir = (r) => {
    return Math.round(Math.PI * Math.pow(r,2))
}
console.log(sCir(9));
document.write(`<div>Площа кола: ${sCir(9)}</div>`);
// - створити функцію яка обчислює та повертає площу циліндру
const sCyl = (r, h) => {
    return Math.round(2 * Math.PI * r * h) ;
}
console.log(sCyl(5,10));
document.write(`<div>Площа циліндра: ${sCyl(5,10)}</div>`);
// - створити функцію яка приймає масив та виводить кожен його елемент
let mas = [1,2,3,4,5]
const arr = (massive) => {
    for (let i = 0; i < massive.length; i++){
        console.log(massive[i]);
    }
}
arr(mas)
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const textPar = (text) => {
    return text;
}
document.write(`<h1>${textPar('привет как твои дела?')}</h1>`);
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const textUl = (text) => {
    document.write(`<ul>    <li>${text}</li> <li>${text}</li> <li>${text}</li>   </ul>`);
}
textUl('items')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const liCastom = (text, li) => {
  document.write('<ul>');
  for (let i =0; i < li; i++){
    document.write(`<li>${text}</li>`);
  }
  document.write('<ul>');
}
liCastom('item', 10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let primMass = [1,2,3,'hello world!',true]
const list = (massive) => {
    document.write('<ol>')
    for (let i = 0; i < massive.length; i++ ){
        document.write(`<li>${massive[i]}</li>`);
    }
    document.write('<ol>')
}
list(primMass)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
mas = [{id: 1, name: 'kirill', age: 100},{id: 2, name: 'bobi', age: 20}, {id: 3, name: 'Jojo', age: 150}];
const masObj = (massive) => {
    for (let i = 0; i < massive.length; i++){
        document.write(`<div>${massive[i].id} ${massive[i].name} - ${massive[i].age} y.o</div>`);
    }
}
masObj(mas)









