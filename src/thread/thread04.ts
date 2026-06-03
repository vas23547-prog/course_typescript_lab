/* 
  Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/
export async function fetchWithFallback(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    return response.text();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    } else {
      return 'Error: Unknown error';
    }
  }
}