import {Comment, Post} from "@/utils/api";

interface Props {
    post: Post
    comments: Comment[]
}
export default function PostLayout(props: Props) {

    return (
        <div>
            <h1>{props.post.title}</h1>
            <p>{props.post.body}</p>
            <h2>Comments</h2>
            <ul>
                {props.comments.map((comment, index) => (
                    <li key={comment.id}>
                        <strong>{comment.name} ({comment.email})</strong>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
