/* 
	Напишите функцию capitalize_words(sentence), которая принимает предложение и возвращает его, преобразовав первую букву каждого слова в заглавную.
	Подсказка: разбить предложение на слова можно с помощью метода split, соединить слова с помощью метода join. Для обработки массива слов используйте цикл.
*/
// Функция переводит в верхний регистр первую букву каждого слова через цикл while
export function capitalize_words(sentence) {
  let words = sentence.split(' ')
  let i = 0
  while (i < words.length) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }
    i++
  }
  return words.join(' ')
}
