/* 
	Реализуйте функцию rotateArrayLeft(arr), которая сдвигает элементы массива влево на одну позицию с помощью методов shift и push. Предусмотрти случай, когда массив пустой.
*/
// Функция сдвигает элементы массива влево на одну позицию через shift и push
export function rotateArrayLeft(arr) {
  if (arr.length === 0) return arr
  let first = arr.shift()
  arr.push(first)
  return arr
}
