import * as React from 'react';
import { PostProps } from '../../types/types';

 
const Post: React.FC<PostProps> = ( {post} ) => {
    return ( 
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
     );
}
 
export default Post;