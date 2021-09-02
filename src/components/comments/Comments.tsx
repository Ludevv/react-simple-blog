import { Box } from '@material-ui/core';
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
        <Box sx={{
            margin: "80px 150px",
            fontFamily: "Roboto",
            fontSize: "20px",
        }}>
            <h3>Comments:</h3>
            {showComments}
        </Box>
     );
}
 
export default Comments;