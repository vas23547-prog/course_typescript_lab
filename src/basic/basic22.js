/* 
	Реализуйте функцию palindrome_check(word), которая проверяет, является ли слово палиндромом (читается одинаково слева направо и справа налево).
	Подсказка: используйте методы split и join для строк и метод reverse для массивов.
*/
// Функция проверяет палиндром через сравнение с обратной строкой
export function palindrome_check(word) {
  let reversed = word.split('').reverse().join('')
  return word === reversed
}
