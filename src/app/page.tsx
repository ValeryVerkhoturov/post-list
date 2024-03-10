import {api} from "@/utils/api";
import PostList from "@/components/post-list";

export default async function Home() {
    const posts = await api.getPosts()

    return (
        <PostList posts={posts} />
    );
}
