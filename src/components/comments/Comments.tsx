import * as React from 'react';
import { CommentsProps } from '../../types/types';
import CommentItem from './CommentItem';


const Comments: React.FC<CommentsProps> = ( {comments} ) => {

    const showComments = comments.map(comment => 
        <CommentItem 
            key={comment.email}
            name={comment.name} 
            email={comment.email} 
            body={comment.body}
        />
)
    return ( 
        <div>
            <h5>Comments:</h5>
            {showComments}
        </div>
     );
}
 
export default Comments;