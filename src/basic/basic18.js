/* 
	Напишите функцию second_largest(arr), находящую второе максимальное значение в массиве. Если такого элемента нет - вернуть null. Функцию сортировки использовать нельзя, можно использовать циклы while или for.
*/
// Функция находит второе максимальное значение через цикл while
export function second_largest(arr) {
    if (arr.length < 2) return null
    let max = arr[0]
    let second = null
    let i = 1
    while (i < arr.length) {
        if (arr[i] > max) {
            second = max
            max = arr[i]
        } else if (arr[i] < max && (second === null || arr[i] > second)) {
            second = arr[i]
        }
        i++
    }
    return second
}

