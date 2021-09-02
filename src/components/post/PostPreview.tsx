import * as React from 'react';
import { Link } from 'react-router-dom';
import { PostPreviewProps } from '../../types/types';

 
const PostPreview: React.FC<PostPreviewProps> = ( {title, description, postId} ) => {
    return ( 
        <div>
			<h3>{title}</h3>
			<p>{description}</p>
			<Link to={`/posts/${postId}`}>
        		Full Version
      		</Link>
		</div>
     );
}
 
export default PostPreview;