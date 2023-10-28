const snakeData = 'data_in_snake_case';

function solutionFn(snData){
    list = snData.split('_')
    converted = ''
    for (let index = 0; index < list.length; index++) {
        word = list[index][0].toUpperCase() + list[index].substring(1)
        converted = converted+word
    }

    return converted
}



const result = solutionFn(snakeData);
console.log(result); // "dataInSnakeCase"