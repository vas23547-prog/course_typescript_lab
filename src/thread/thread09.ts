/* 
	 Допишите функцию withRetry, которая пытается выполнить операцию несколько раз перед тем как сдаться.
*/

export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3
): Promise<T> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxAttempts - 1) {
        throw error;
      }
    }
  }
  throw new Error("Unexpected state: maxAttempts should be positive");
}
