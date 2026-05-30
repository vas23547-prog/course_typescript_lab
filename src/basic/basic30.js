/* 
	РРеализуйте функцию extractUniqueValues(arr1, arr2), которая берет уникальные элементы первого массива и помещает их в конец второго массива с помощью методов indexOf и push.
*/
// Функция добавляет уникальные элементы arr1 в конец arr2 через indexOf и push
export function extractUniqueValues(arr1, arr2) {
  let i = 0
  while (i < arr1.length) {
    if (arr2.indexOf(arr1[i]) === -1) {
      arr2.push(arr1[i])
    }
    i++
  }
  return arr2
}

