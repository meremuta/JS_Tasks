function solutionFn(number){
    while (String(number).length>1) {
        result = 1
        for (let index = 0; index < String(number).length; index++) {
            result = result * String(number)[index]
        }
        number = result
    }
    return number
}

console.log(solutionFn(4))

