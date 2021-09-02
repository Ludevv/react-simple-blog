export type NavigationBarProps = {
    name: string | React.ReactNode;
}

export type PostType = {
    userId: string;
    id: number;
    title: string;
    body: string;
}

export type PostPreviewProps = {
    title: string;
    description: string;
    postId: number;
}

export type RouteParams = {id: string}

export type CommentItemProps = {
    email: string;
    name: string;
    body: string;
}

export type CommentsProps = {
    comments: CommentItemProps[];
}

export type PostProps = {
    post: PostType;
}

