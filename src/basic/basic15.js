/* 
	Напишите функцию swap_first_last(arr), меняющую местами первый и последний элемент массива. Функция не должна использовать функции высших порядков и оператор ..., также она не должна изменять исходный массив, можно использовать циклы while или for.
*/
// Функция возвращает новый массив с переставленными первым и последним элементами
export function swap_first_last(arr) {
    let result = []
    let i = 0
    while (i < arr.length) {
        result.push(arr[i])
        i++
    }
    if (result.length > 0) {
        let temp = result[0]
        result[0] = result[result.length - 1]
        result[result.length - 1] = temp
    }
    return result
}
