/* 
	Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  // TODO: Реализовать retry механизм
  return new Promise<User>((resolve, reject) => {
    const attempt = (currentAttempt: number) => {
      fetchUser(id)
        .then(resolve)
        .catch(error => {
          if (currentAttempt >= maxAttempts) {
            reject(error);
          } else {
            attempt(currentAttempt + 1);
          }
        });
    };
    
    attempt(1);
  });
}
