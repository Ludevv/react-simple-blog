import * as React from 'react';
import { CommentItemProps } from '../../types/types';


const CommentItem: React.FC<CommentItemProps> = ( {name, email, body} ) => {
    return ( 
        <div>
            <p>{email}</p>
            <h5>{name}</h5>
            <p>{body}</p>
        </div>
     );
}
 
export default CommentItem;