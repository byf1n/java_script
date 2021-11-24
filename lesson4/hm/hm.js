let PI = 3.14
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRect (a, b) {
    let s = a * b;
    return s;
}
s = sRect(5,6)
document.write('Площа прямокутника: ' + s);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sCir (r){
    let s = PI * r * r;
    return s;
}
s = sCir(15)
document.write(`<div>Площа кола: ${s}</div>`);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCil (h, r){ // S = 2 π r ( h + r )
    let s =  2 * PI * r * h;
    return s;
}
s = sCil (9,8)
document.write(`<div>Площа цилиндра: ${s}</div>`);
// - створити функцію яка приймає масив та виводить кожен його елемент
let arrey = [123, 'hello', true, 'JoJo', 'Obeme']
function inMassive (arrey){
    for (i = 0; i < arrey.length; i++){
        document.write(`<div>${arrey[i]}</div>`);
    }
}
inMassive(arrey)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function parText (par){
    document.write(`<p>${par}</p>`);
}
parText('Lorem ipsum dolor sit amet.')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl (item){
    document.write(`<ul>  <li>${item}</li>
                          <li>${item}</li>
                          <li>${item}</li>   </ul>`);
}
createUl('item')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlCycle (item, li){
    document.write('<ul>');
        for (i = 0; i < li ;i++ ){
            document.write(`<li>${item} </li>`);
        }
    document.write('</ul>');
}
createUlCycle('bla bla bla', 10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
arrey = [123, 1000, 'hello ', 'Slava Ukraine', true, false ]
function massive (arrey){
    document.write('<ol>');

    for (i = 0; i < arrey.length; i++)
    document.write(`<li>${arrey[i]}</li>`);

    document.write('</ol>');
}
massive(arrey)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
newArrey = [{id: 1, name: 'JoJo', age: 24}, {id: 2, name: 'Obeme', age: 40}, {id: 3, name: 'Dmitro', age: 19}];
function newMassive (newArrey){
    for (i = 0; i< newArrey.length; i++){
        document.write(`<div>${newArrey[i].id} ${newArrey[i].name} - ${newArrey[i].age} years </div>`);
    }
}
newMassive(newArrey)