"use client";
import styles from "./post-list.module.css";
import {useState} from "react";
import {Post} from "@/utils/api";
import Pagination from "@/components/pagination";
import {useSearchParams} from "next/navigation";

interface Props {
    posts: Post[]
}
export default function PostList(props: Props) {
    const searchParams = useSearchParams()
    const [currentPage, setCurrentPage] = useState(searchParams.get("page") ? parseInt(searchParams.get("page")!) : 1)
    const [postsPerPage] = useState(10)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = props.posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    };

    return (
        <div className={styles.postsContainer}>
            <h1>Posts</h1>
            {currentPosts.map((post) => (
                <div key={post.id} className={styles.post}>
                    <a href={`/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </a>
                </div>
                ))}
            <Pagination postsPerPage={postsPerPage}
                        totalPosts={props.posts.length}
                        paginate={paginate}
                        currentPage={currentPage} />
        </div>
    );
}
