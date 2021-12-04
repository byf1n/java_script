// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, prod, year, maxSpeed, engineV) {
    this.model = model;
    this.prod = prod;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineV = engineV;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model}; producer - ${this.prod}; year - ${this.year}; maxSpeed - ${this.maxSpeed}; 
         engineV - ${this.engineV}`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class ClassCar {
    constructor(model, producer, year, maxSpeed, engV) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engV = engV;
    }
        drive () {
            console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
        };
        info () {
            console.log(`model - ${this.model}; producer - ${this.producer}; year - ${this.year}; 
            maxSpeed - ${this.maxSpeed}; engV - ${this.engV} `);
        };
        increaseMaxSpeed (newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed;
        };
        changeYear (newYear) {
            this.year = year;
        };
        addDriver (driver) {
            this.driver = driver;
        };
    }

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class  Popel {
    constructor(her_name, years, size) {
        this.her_name = her_name;
        this.years = years;
        this.size = size;
    }

}
let masPopel = [
    new Popel('Papel',21,41),
    new Popel('Papel1',22,42),
    new Popel('Papel2',23,43),
    new Popel('Papel3',24,44),
    new Popel('Papel4',25,45),
    new Popel('Papel5',26,46)

]
class Prunz {
    constructor(him_name, years, sizeFind) {
        this.him_name = him_name;
        this.years = years;
        this.sizeFind = sizeFind;
    }

}
let findPrunz = new Prunz('Popel5',26,46);

for (let i = 0; i < masPopel.length;  i++){
    if (masPopel[i].size === findPrunz.sizeFind){
        console.log(masPopel[i].her_name);
    }
}
let qwe = masPopel.find(value => value.size === findPrunz.sizeFind)
console.log(qwe.her_name);
