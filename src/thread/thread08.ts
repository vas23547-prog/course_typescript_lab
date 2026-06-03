/* 
	Допишите функцию, которая выполняет массив функций и возвращает массив результатов, обрабатывая ошибки отдельных функций.
*/

export function executeFunctionsSafely(functions: (() => unknown)[]): { result?: unknown; error?: string }[] {
  const results: { result?: unknown; error?: string }[] = [];
  // Выполнить каждую функцию, поймать ошибки
  // Для успешных результатов: { result: значение }
  // Для ошибок: { error: сообщение_ошибки }
  for (const func of functions) {
    try {
      const result = func();
      results.push({ result });
    } catch (error) {
      results.push({ error: (error as Error).message });
    }
  }

  return results;
}
