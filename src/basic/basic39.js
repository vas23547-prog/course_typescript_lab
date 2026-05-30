/* 
	Реализовать функцию all, которая принимает массив и функцию-callback. Callback принимает один элемент массива и возвращает true или false. Функция all должна вернуть true, если все элементы массива вернули true в callback. Нельзя использовать метод массивов every.
*/
// Функция all проверяет, что все элементы удовлетворяют callback
export function all(arr, callback) {
  let i = 0
  while (i < arr.length) {
    if (!callback(arr[i])) {
      return false
    }
    i++
  }
  return true
}

