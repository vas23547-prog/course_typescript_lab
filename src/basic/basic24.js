/* 
	Напишите функцию replace_word(sentence, old_word, new_word), заменяющую старое слово новым словом в предложении.
*/
// Функция заменяет слово в предложении через split и join
export function replace_word(sentence, old_word, new_word) {
    let words = sentence.split(' ')
    let i = 0
    while (i < words.length) {
        if (words[i] === old_word) {
            words[i] = new_word
        }
        i++
    }
    return words.join(' ')
}

