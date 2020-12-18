let a = 7;
let b = 3;
let q = parseInt(a / b);
let r = a - b * q;

if(r < 0){
    r += Math.abs(b);
    q = (a - r) / b;
}

console.log(q + " " + r);