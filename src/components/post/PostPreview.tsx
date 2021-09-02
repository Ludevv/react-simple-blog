import { Box } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { PostPreviewProps } from '../../types/types';

 
const PostPreview: React.FC<PostPreviewProps> = ( {title, description, postId} ) => {
    return ( 
        <Box sx={{
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "flex-start",
			width: "50%",
			height: "180px",
			bgcolor: "#f2f2f2",
			borderRadius: "12px",
			margin: "30px auto",
			padding: "20px 30px",
			fontFamily: "Roboto",
		}}>
			<h3>{title}</h3>
			<p>{description}</p>
			<Link to={`/posts/${postId}`}>
        		Full Version
      		</Link>
		</Box>
     );
}
 
export default PostPreview;