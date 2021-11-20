// --створити масив з:
//     - з 5 числових значень
let int = [1, 2, 3, 4, 5];
for (i = 0; i < int.length; i++) {
    console.log(int[i]);
}
// - з 5 стічкових значень
let str = ['qw', 'waf', 'qwerty', 'asd', 'hello'];
for (i = 0; i < str.length; i++) {
    console.log(str[i]);
}
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let mix = [true, false, 'str', 123, -1090];
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[4]);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let massive = [];
massive[0] = 'hello'
massive[1] = true
massive[2] = 100 + 1
massive[3] = 123
massive[4] = ''
console.log(massive);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (i = 0; i < 10; i++) {
    document.write(`<div>Lorem ipsum dolor sit  </div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (i = 0; i < 10; i++) {
    document.write(`<div>${i+1} lorem ipsum dolor sit amet</div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
i = 0;
while (i<20){
    document.write('<h1>lorem ipsum dolor sit amet.</h1>');
    i++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
i = 0;
while (i<20){
    document.write(`<h1>${i+1} Lorem ipsum dolor sit amet.</h1>`);
    i++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let int_masive = [10,20,30,40,50,60,70,80,90,100]
for (i = 0;i<int_masive.length;i++){
    console.log(int_masive[i]);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let str_masive = ['first','second','third','4-th','5-th','6-th','7-th','8-th','9-th','10-th']
for (i = 0;i<str_masive.length;i++){
    console.log(str_masive[i]);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let all_massive = [true,false,30,40,50,'first','second','third',10,20]
for(i = 0;i<all_massive.length;i++){
    console.log(all_massive[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
all_massive = [30,40,50,'first','second','third',false,true,10,20]
for (i = 0;i<all_massive.length;i++)
    if (typeof all_massive[i] === 'boolean' ){
    console.log(all_massive[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
all_massive = [30,40,50,'first','second','third',false,true,10,20]
for (i = 0;i<all_massive.length;i++)
    if (typeof all_massive[i] === 'number' ){
        console.log(all_massive[i]);
    }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (i = 0;i<all_massive.length;i++)
    if (typeof all_massive[i] === 'string' ){
        console.log(all_massive[i]);
    }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
massive = []
massive[0] = 123
massive[1] = 321
massive[2] = 911
massive[3] = 1000
massive[4] = true
massive[5] = 'str'
massive[6] = 'text'
massive[7] = false
massive[8] = 'lorem'
massive[9] = '123'
for (i=0;i<massive.length;i++){
    console.log(massive[i])
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
 for (i = 0; i < 10; i++) {
    console.log(`   поточний крок циклу: ${i}`);
    document.write(`   поточний крок циклу: ${i}`);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i++){
    console.log(`Поточний крок циклу: ${i}`);
    document.write(`Поточний крок циклу: ${i}`);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i=i+2){
    console.log(`   поточний крок циклу: ${i}`);
    document.write(`   поточний крок циклу: ${i}`);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i = 0; i < 100; i++){
    if (i%2===0){
        console.log('парні кроки: ' + i);
        document.write('парні кроки: ' + i);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i = 0; i < 100; i++){
    if (i%2 !== 0){
        console.log('   Непарні кроки: ' + i);
        document.write('   Непарні кроки: ' + i);
    }
}
