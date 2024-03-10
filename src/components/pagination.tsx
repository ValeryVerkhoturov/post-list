import styles from "./pagination.module.css";
import Link from "next/link";

interface Props {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
    currentPage: number
}

const Pagination = (props: Props) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={styles.pagination}>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <Link onClick={() => props.paginate(number)}
                           href={`?page=${number}`}
                           className={props.currentPage === number ? styles.active : ''}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination