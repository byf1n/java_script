// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function minNum (a, b, c){
    if (a <= b && a <= c){
        document.write(`Min number: ${a}`);
    } else if (b <= a && b <= c){
        document.write(`Min number: ${b}`);
    } else {
        document.write(`Min number: ${c}`);
    }
}
minNum(10, 20, 30)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNum (a, b, c){
    if (a > b && a > c){
        document.write(` Max number: ${a}`);
    } else if (b > a && b > c){
        document.write(` Max number: ${b}`);
    } else{
        document.write(` Max number: ${c}`);
    }
}
maxNum(10, 20, 30)
// - створити функцію яка повертає найбільше число з масиву
let massive = [113,213,313,413];
function maxNumMassive (array){
    let max = massive[0];
    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i]

        }
    }return max;
} document.write(`<div> найбільше число з масиву: ${maxNumMassive(massive)}</div>`);

// - створити функцію яка повертає найменьше число з масиву
function minNumMassive (array){
    let min = massive[0];
    for (let i = 0; i < array.length; i++)
    if (array[i] < min){
        min = array[i];

    }return min;
} document.write(`<div>найменьше число з масиву: ${minNumMassive(massive)}</div>`);
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let masNum = [15,125,435,665]; /*1240*/
function sumMasNum (array){
    let sum = 0 ;
    for (let  i = 0; i < array.length; i++){
        sum = sum + array[i];

    }
    return sum;
}
document.write(` Сума значень масиву: ${sumMasNum(masNum)}`)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function averageNum (array){
    let average = 0;
    for (let i = 0; i < array.length; i++){
        average = average + array[i];

    }return (average/massive.length);
}document.write(`<div>середнє арифметичне: ${averageNum(massive)} </div>`);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function anyMinNum (arg){
    let min = arguments[0];
    let max = arguments[0];
    for (let i=0; i < arguments.length; i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
        if(arguments[i] < min){
            min = arguments[i];
        }
    }console.log(`max ${max}`);
    return min;
}document.write(`min: ${anyMinNum(22,33,44,55,10)}`); /*  -  10 / 55   */
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function randomizer (length) {
     let arrayEmpty = [];
     for (let i = 0; i < length; i++){
         arrayEmpty.push(Math.floor(Math.random()* 100));
     }
 return arrayEmpty;
 }

 document.write(`<div> Randomizer: ${randomizer(12)} </div>`)

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function random (length, limit) {
    let emptyMassive = [];
    for (let i = 0; i < length; i++){
        emptyMassive.push(Math.round(Math.random()*limit))
    }
    return emptyMassive;
}
    document.write(`<div> Randomizer with limit: ${random(3, 50)} </div>`)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
massive = [1,2,3]
function reverse (massive){
    let newMassive = []
    for (let i = massive.length-1; i >= 0; i--){
        newMassive = newMassive + massive[i]
    } return newMassive;
}
document.write(`<div> reverse massive: ${reverse(massive)} </div>`)