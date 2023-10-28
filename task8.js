str = "This text is spam"
str2 = "This text is important"
keys = ["spam", "money"]

/**
 * Принимает на вход текст письма и массив ключевых слов и проверяет,
 * содержится ли хотя бы одно из ключевых слов в этом тексте
 * 
 * @param {String} text - текст, проверяемый на спам
 * @param {String[]} keywords - массив ключевых слов
 * @returns {Boolean}
 */
function isSpam(text, keywords) {
    answ = 0
    for (let index = 0; index < keywords.length; index++) {
        if (text.search(keywords[index])> 0) {
            answ = answ+1
        } else {
            answ = answ
        }

        
    }
    if (answ > 0) {
        return true
    } else {
        return false
    }
}


let spam = isSpam(str, keys)
console.log(spam)