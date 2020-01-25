const arrOfNums: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const arrOfStr: Array<string> = ['Hello', 'Artem'];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrOfNums);
reverse(arrOfStr);