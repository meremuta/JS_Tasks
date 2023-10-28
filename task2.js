const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};


function solutinFn(object){
    str = 0;
    num = 0;
    obj = 0;
    bint = 0;
    bool = 0;
    und = 0;
    nl = 0;
    sy = 0;

    for (const [key, value] of Object.entries(object)) {
        if (typeof value == "string") {
            str = str+1
        } else if (typeof value == "object"){
            obj = obj+1
        } else if (typeof value == "number"){
            num = num+1
        } else if (typeof value == "bigint"){
            bint = bint+1
        } else if (typeof value == "boolean"){
            bool = bool+1
        } else if (typeof value == "undefined"){
            und = und+1

        } else if (typeof value == "null"){
            nl = nl+1
        } else {
            sy = sy+1
        }
    }
    
    let result = {
        string: str, 
        number: num, 
        object: obj, 
        bigint: bint, 
        boolean: bool, 
        undefined: und, 
        null: nl, 
        symbol: sy
    }
    return result

}

let res = solutinFn(object = initialObj);

console.log(res)