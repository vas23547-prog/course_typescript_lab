/* 
	Напишите функцию average(arr), которая рассчитывает среднее арифметическое элементов массива. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/
// Функция вычисляет среднее арифметическое через цикл while
export function average(arr) {
  let sum = 0
  let i = 0
  while (i < arr.length) {
    sum += arr[i]
    i++
  }
  return arr.length > 0 ? sum / arr.length : 0
}

