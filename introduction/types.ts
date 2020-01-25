const isTS: boolean = true;

const int: number = 5;
const float: number = 4.5;
const num: number = 3e5;

const message: string = 'Hello world';

const numArr: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray: Array<number> = [1, 1, 2, 3, 5, 8, 13]; //дженерик

//Tuple
const contact : [string, number] =  ['Artem', 1234567];

//Any
let variable: any = 'var';
variable = 15;
variable = [];

//процедура
function sayMyName(name: string): void{
    console.log(name);
}
sayMyName('Andrew');

// Never
// Использовать,когда:
// 1. функция постоянно что-то делает
// 2. возврщает ошибку

function throwErr(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true){

    }
}

// Type
// Позволяет указывать собственные типы
type Login = string;
const login: Login = 'qwerty';

type ID = number | string; //моежт принимать значение строки или числа
const id1: ID = '1224525';
const id2: ID = 12245;

type SomeType = string | null | undefined;