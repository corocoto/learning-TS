interface Rect {
    readonly id: string
    color?: string //? - необязательное поле
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: 'rectangle',
    size: {
        width: 5,
        height: 10
    }
};

const rect2: Rect = {
    id: 'rect',
    size: {
        width: 10,
        height: 5
    },
    color: '#ccc'
};

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//наследование интерфейcов

interface RectWithArea extends Rect{
    getArea: () => number
}

const rect5: RectWithArea = {
    id: 'rect5',
    size: {
        width: 100,
        height: 20
    },
    getArea(): number{
        return this.size.width * this.size.height
    }
};

//имплементирование классов от интерфейса

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date();
    setTime(date: Date): void {
        this.time = date;
    }
}

// =======
interface IStyles {
    [key: string]: string
}

const css: IStyles = {
    border: '1px solid black',
    marginTop: '20px'
};