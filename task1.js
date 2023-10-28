const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
let arr = [];

function filter(array , num , inplace, out) {

    function filterFn(n = num, inp = array, ar = out) {
        for (let index = 0; index < inp.length; index++) {
            let word = String(inp[index]);
            if (word.length > n) {
                let elem = word;
                ar.push(elem);
            }   
        }
    }

    if (inplace) {
        filterFn()
        return out;
    } else {
        return array;
    }
}

let answ = filter(array = words, num = 6, inplace = true, out = arr)

console.log(answ)