function sum(a, b) {
    if (typeof a == "number") {
        if (typeof b == "number") {
            return a+b
        } else {
            return "The right operand is not number"
        }
    } else {
        if (typeof b == "number") {
            return "The left operand is not number"
        } else {
            return "Operands are not numbers"
        }
    }
}


let s = sum(1, '2')

console.log(s)