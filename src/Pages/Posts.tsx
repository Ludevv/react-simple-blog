import React, { useEffect, useState } from 'react';
import PostPreview from '../components/post/PostPreview';
import { PostType } from '../types/types';
import NavigationBar from '../components/NavigationBar';


export const API = "https://jsonplaceholder.typicode.com/posts";

const App: React.FC = () => {
	const [posts, setPosts] = useState<PostType[]>([]);

	useEffect(() => {
		fetch(API)
		.then((response) => {
			if (response.ok) return response;
			throw Error(response.statusText);
		})
		.then((response) => response.json())
		.then((posts) => {
			setPosts(posts);
		})
		.catch((error) => console.log(error));
	}, [])

	const showPosts = posts.map(post => 
		<PostPreview 
			key={post.id} 
			title={post.title} 
			description={post.body} 
			postId={post.id}
		/>
	)

	return (
		<div>
			<NavigationBar name={"Posts"}/>
			{showPosts}
		</div>
	);
}

export default App;
