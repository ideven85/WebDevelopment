console.log("Hi")
console.log(Number.MAX_VALUE);
console.log(7/0);
let n: number = 2**53 - 1000;
// while (n !== 2**53 + 1000) {
//     n = n + 1;
// }

let array: Array<number>=[];
n=3;
while(n!=1){
    array.push(n);
    n%2==0?n=n/2:n=n*3+1;
}
array.push(n);
console.log(array);

function hailStoneSequence(n:number):Array<number>{
    const array: Array<number>=[];
    let array1: ReadonlyArray<number> = [];

    while(n!=1){
        array.push(n);
        
        n%2==0?n=n/2:n=n*3+1;
    }
    array.push(n);
    return array;
}
console.log(hailStoneSequence(3));
class Person{
    this.name=;
    age:number
}
function fun_fact_about_person(person:Person){
    console.log("The age of " + person.name + " is a perfect square: " + Math.sqrt(person.age));
    
}

let treasures: Map<string, number> = new Map();
let x: string = "palm";
treasures.set("beach", 25);
treasures.set("palm", 50);
treasures.set("cove", 75);
treasures.set("x", 100);
treasures.set("palm", treasures.size);
treasures.delete("beach");
let found: number = 0;
for (const treasure of treasures.values()) {
    found += treasure;
}

console.log(treasures.get(x));
console.log(treasures.get("x"));
let a = 5;// (1)
let b:number;
if (a > 10) {  // (2)
     b = 2; // (3)
} else {       // (4)
    b = 4;     // (5)
}              // (6)
b *= 3;        // (7)

let point: {x:number,y:number}={x:5,y:3};//Record Type

console.log(point);

enum Month {
    JANUARY, FEBRUARY, MARCH, APRIL,
    MAY, JUNE, JULY, AUGUST,
    SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER,
}

enum PenColor {
    BLACK, GRAY, RED, PINK, ORANGE,
    YELLOW, GREEN, CYAN, BLUE, MAGENTA,
}

