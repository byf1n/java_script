// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const minNum = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
        document.write(`<div>найменьше: ${num1}</div>`);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
        document.write(`<div>найменьше: ${num2}</div>`);
    } else {
        console.log(num3);
        document.write(`<div>найменьше: ${num3}</div>`);
    }
}
minNum(10,20,30)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const maxNum = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3){
        console.log(num1);
        document.write(num1);
    } else if (num2 > num1 && num2 > num3){
        console.log(num2);
        document.write(num2);
    } else{
        console.log(num3);
        document.write(num3);
    }
}
maxNum(30,40,50)
// - створити функцію яка повертає найбільше число з масиву
let mas = [1,2,3,4,5,6,3525];
const maxMas = (massive) => {
    let max = massive[0];
    for (let i = 0; i<massive.length; i++){
        if (massive[i] > max){
            max = massive[i];
        }
    }
    return max;
}
document.write(`<h2>найбільше число з масиву: ${maxMas(mas)}</h2>`);
// - створити функцію яка повертає найменьше число з масиву
mas = [10,20,30,40,50];
const minMas = (massive) => {
    let min = massive[0];
    for (let element of massive) {
        if (element < min){
            min = element;
        }
    } return min;
}
document.write(`<h2>найменьше число з масиву: ${minMas(mas)}</h2>`);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
mas = [10,20,30,40,50];  //  150
const sumMas = (massive) => {
  let sum = 0;
  for (let element of massive){
      sum = sum + element;
  } return sum;
}
document.write(`<h1>Сума масиву: ${sumMas(mas)}</h1>`);
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const average = (massive) => {
    let sum = 0;
    for (let i = 0; i < massive.length; i++){
        sum = sum + massive[i];
    } return sum / massive.length;
}
document.write(`<h2>average: ${average(mas)}</h2>`);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
const minMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (let element of arg){
        if (element < min){
            min = element;
        }
        if (element > max){
            max = element;
        }
    }
    console.log('max ' + max);
    return min;
}
document.write(`<h3>найменьше: ${minMax(-100,100,200,300)}</h3>`)
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
emptyMas = [];
const random = (length) => {
    for (let i = 0; i < length; i++){
        emptyMas.push(Math.round(Math.random()*100));
    }
    return emptyMas;
}
document.write(random(10));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який
// характеризує кінцеве значення діапазону.
const randomLimit = (length, limit) => {
    for (let i = 0; i < length; i++){
        emptyMas.push(Math.round(Math.random()*limit))
    }
    return emptyMas;
}
document.write(`<h3>${randomLimit(12,25)}</h3>`);
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
mas = [1,2,3,4,5,60,70,80,100];
const reverse = (massive) => {
    for (let i = massive.length - 1; i >= 0; i--){
        console.log(massive[i]);
    }
}
reverse(mas)