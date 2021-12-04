// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let emptyArr = [];
emptyArr = [
    new User(1, 'kirill', 'qwe', '123@gmail.com', 309678489989),
    new User(2, 'bob', 'erty', 'qwe@gmail.com', 30998689989),
    new User(3, 'jeck', 'jojof', 'sadf@gmail.com', 30990489989),
    new User(4, 'robi', 'bobenko', 'xzc@gmail.com', 30776887890489989),
    new User(5, 'betman', 'koks', 'tytry@gmail.com', 40990478678989),
    new User(6, 'pavlo', 'qwetrty', 'qwghfghe@gmail.com', 509904786889),
    new User(7, 'wera', 'frenko', 'qwgfhe@gmail.com', 6099048789)
]
console.log(emptyArr);
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let niceUser = emptyArr.filter((item) => {
    if (item.id % 2 === 0) {
        return item
    }
})
console.log(niceUser);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArr = emptyArr.sort((a, b) => a.id - b.id);
console.log(sortArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let emptyClient = [];
emptyClient = [
    new Client(1, 'Lida', 'Giga', 'sg@gmail.com', 30680000001, ['book', 'game', 'ps6']),
    new Client(2, 'Stepa', 'Rony', 'oli@gmail.com', 30680000002, ['plane', 'shop', 'phone']),
    new Client(3, 'Didko', 'Tevez', 'zeru@gmail.com', 30680000003, ['ball', 'ps5']),
    new Client(4, 'bot', 'Olivie', 'kosmos@gmail.com', 30680000004, ['nothing']),
]
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = emptyClient.sort((a, b) => a.order.length - b.order.length)
console.log(sortClient);