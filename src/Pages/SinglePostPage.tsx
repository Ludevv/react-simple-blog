import * as React from 'react';
import { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import NavigationBar from '../components/NavigationBar';
import Post from '../components/post/Post';
import { CommentItemProps, PostType, RouteParams } from '../types/types';
import { API } from './Posts';



const SignlePostPage: React.FC<RouteComponentProps<RouteParams>> = ({match}) => {

    const [post, setPost] = useState<PostType>();
    const [comments, setComments] = useState<CommentItemProps[]>();

    const postId = match.params.id;
    const link = API + `/${postId}/comments`;

	useEffect(() => {

    //Fetch post
		fetch(API)
		.then((response) => {
			if (response.ok) return response;
			throw Error(response.statusText);
		})
		.then((response) => response.json())
		.then((posts) => {
            const post = posts.filter((post: PostType) => String(post.id) === postId);
			setPost(post[0]);
		})
		.catch((error) => console.log(error));

    //Fetch comments
		fetch(link)
		.then((response) => {
			if (response.ok) return response;
			throw Error(response.statusText);
		})
		.then((response) => response.json())
		.then((comments) => {
			setComments(comments);
		})
		.catch((error) => console.log(error));

	}, [postId, link])

 
    return ( 
        <div>
            <NavigationBar 
                name={
                    <>
                        <Link to="/">← Posts</Link>
                        <span> {post && post.title}</span>  
                    </>
                }
            />
            {post && <Post post={post}/>}
            {comments && <Comments comments={comments}/>}
        </div>
     );
}
 
export default SignlePostPage;