let data: Array<number> = [ 2, 4, 6 ];
let total: number = 0;
let average: number = 0;
let n: number = 0;
for (let value of data) {
    n += 1;
    total += value;
    average = total / n;
    console.log(average);
}

n=3;
while(n!=1){
    console.log(n);
    n%2==0?n=n/2:n=3*n+1;

    
}

//console.log(data.map((x,y)=>x+y).reduce(x=>x/data.length));