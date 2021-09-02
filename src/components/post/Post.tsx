import { Box } from '@material-ui/core';
import * as React from 'react';
import { PostProps } from '../../types/types';

 
const Post: React.FC<PostProps> = ( {post} ) => {
    return ( 
        <Box sx={{
            margin: "50px 150px",
            fontFamily: "Roboto",
            fontSize: "20px",
        }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </Box>
     );
}
 
export default Post;