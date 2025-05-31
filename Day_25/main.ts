
/* Dat number or null */
const number: number | null = 5;

/* Kieu string */
const str: string = 'string';

/* Kieu boolean */
const bool: boolean = true;

/* Kieu null */
const nul: null = null;

/* Kieu lon xon */
const lonXon: any = 12; //Khong khuyen khich

/* Array - number */
const numbers: number[] = [1, 2, 3, 4];
// Cach 2:
// const numbers: Array<number> = [1, 2, 3, 4];

/* Array - string */
const numberString: Array<number | string> = [1, 2, 3, "123"]

/* Interface - Dinh nghia Object (Giong nhu 1 Class) */
interface Master {
    id: number;
    name: string;
}
// Thua ke
interface Person extends Master {
    girlFriend: Master;
}
interface Product extends Master {}

// Tao object dua tren Interface - Member
const member: Person = {
    id: 1,
    name: 'Nguyen Minh Viet',
    girlFriend: {
        id: 1,
        name: 'Nguyen Thuy Quynh',
    }
}

/* Array Object */
// Array ban chat la 1 object
const persons: Person[] = [
    {
        id: 1,
        name: 'Nguyen Minh Viet',
        girlFriend: {
            id: 1,
            name: 'Nguyen Thuy Quynh',
        }
    }
]


const getMaxNUmber = (numbers: number[]): number => {
    return Math.max(...numbers);
}
//(numbers: number[]) -> Nhan ve Mot Mang (input)
// : number -> Tra ve mot so (Output)

const maxNumb: number = getMaxNUmber([1, 2, 3, 4]);
console.log(maxNumb);