import { Box } from '@material-ui/core';
import * as React from 'react';
import { CommentItemProps } from '../../types/types';


const CommentItem: React.FC<CommentItemProps> = ( {name, email, body} ) => {
    return ( 
        <Box sx={{
            marginBottom: "70px",
            fontSize: "14px",
        }}>
            <p><em>Email: </em>{email}</p>
            <p><em>Title: </em>{name}</p>
            <p><em>Content: </em>{body}</p>
        </Box>
     );
}
 
export default CommentItem;