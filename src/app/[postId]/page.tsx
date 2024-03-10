import {api} from "@/utils/api";
import PostLayout from "@/components/post-layout";

export default async function Home({ params }: { params: { postId: string } }) {
    const postId = Number(params.postId)
    const post = await api.getPostById(postId)
    const comments = await api.getPostCommentsById(postId)


    return (
        <PostLayout post={post} comments={comments} />
    );
}
