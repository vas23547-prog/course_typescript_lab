/* 
	Реализовать функцию sum<T extends Summable>(a: T[]): T, возвращающую сумму элементов в массиве. Допускается использовать приведение типа Summable к T
*/

export type Summable = {
	sum: (other: Summable) => Summable
}

export function sum<T extends Summable>(a: T[]): T {
	let result = a[0]
	let i = 1
	while (i < a.length) {
		result = result.sum(a[i] as Summable) as T
		i++
	}
	return result
}
