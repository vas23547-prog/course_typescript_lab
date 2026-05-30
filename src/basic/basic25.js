/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/
// Функция удаляет первое вхождение элемента через цикл while
export function removeFirstOccurrence (arr, value) {
  let result = []
  let found = false
  let i = 0
  while (i < arr.length) {
    if (arr[i] === value && !found) {
      found = true
    } else {
      result.push(arr[i])
    }
    i++
  }
  return result
}
