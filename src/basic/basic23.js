/* 
	Напишите функцию strip_special_chars(text), которая удаляет из текста все специальные символы и оставляет только буквы и пробелы.
	Подсказка: для проверки символа можно использовать константу 
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
*/
// Функция удаляет специальные символы, оставляя только буквы и пробелы
export function strip_special_chars(text) {
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '
  let result = ''
  let i = 0
  while (i < text.length) {
    if (allowed.includes(text[i])) {
      result += text[i]
    }
    i++
  }
  return result
}
