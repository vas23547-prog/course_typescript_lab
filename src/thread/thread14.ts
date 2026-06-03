/* 
	Дописать функцию getUserPostsWithAuthor, которая получает посты пользователя, а затем информацию об авторе каждого поста.
*/

import { fetchUser, fetchUserPosts, type Post } from "./promises";
import type { User } from "./promises";

export function getUserPostsWithAuthor(userId: number): Promise<Array<Post & { author: User }>> {
	// TODO: Реализовать цепочку промисов
	return fetchUserPosts(userId).then(posts => {
		const authorPromises = posts.map(post => 
			fetchUser(post.userId).then(author => ({
				...post,
				author
			}))
		);
		return Promise.all(authorPromises);
	});
}
