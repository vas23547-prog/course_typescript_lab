/* 
	Напишите функцию find_max(arr), которая находит максимальное значение в списке чисел. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/
// Функция находит максимальное значение в массиве через цикл while
export function find_max(arr) {
    let max = arr[0]
    let i = 1
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i]
        }
        i++
    }
    return max
}


