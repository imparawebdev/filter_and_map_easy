let vals = [5, 4, 9, 2, 1]

function isEven(x) {
    return (x % 2 == 0) //for the odd ones x % 2 == 1
} // x => x % 2 == 0 Arrow's way

vals = vals.filter(isEven)
console.log(vals)

function tripler(x) {
    return x * 3
}

let tripled = vals.map(tripler)
console.log(tripled)