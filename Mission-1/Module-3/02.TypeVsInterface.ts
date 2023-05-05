// Using Alias
type User = {
    name: string;
    age: number;
}

interface Iuser {
    name: string;
    age: number;
}

// Interface can be extended
interface IEstendedUser extends Iuser {
    roll: number;
}

const user2: IEstendedUser = {
    name: "Omanush",
    age: 2000,
    roll: 12
}

// Alias can be extended too
type extendedUser = User & {
    roll: number
}

const userWithTypeAlias: User = {
    name: 'Type Alias',
    age: 100
}

const userWithInterface: Iuser = {
    name: 'Interface',
    age: 200
}

// Declearning tupes outside of a function
// const addNumbers = (num1: number, num2: number): number => num1 + num2;
type addNumbersType = (num1: number, num2: number) => number;
const addNumbers: addNumbersType = (num1: number, num2: number) => num1 + num2;

//We can use Interface also in a function
interface IAddNumbers {
    (num1: number, num2: number): number;
}

const addNumbers2: IAddNumbers = (num1: number, num2: number) => num1 + num2;


//Array
const RollNumberWithInlineType: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

type RollNumberType = number[];
const RollNumberWithAlias: RollNumberType = [1, 2, 3, 4, 5, 6, 7, 8];

interface IRollNumber{
    [index: number]: number; //Index Signature
}
const RollNumberWithInterface: IRollNumber = [1, 2, 3, 4, 5, 6, 7, 8];