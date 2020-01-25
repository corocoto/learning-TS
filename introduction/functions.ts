function add(x: number, y: number): number {
    return x + y;
}


function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}


interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface PositionWithDefault extends MyPosition{
    default: string
}

function position(): MyPosition
function position(a: number): PositionWithDefault
function position(a: number, b: number)

function position(a?: number, b?: number) {
    if (!a && !b){
        return {x: undefined, y: undefined}
    }
    if (a && !b){
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log('Empty: ', position());
console.log('One param: ', position(5));
console.log('Two params: ', position(5, 4));