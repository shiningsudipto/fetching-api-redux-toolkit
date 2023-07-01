import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./postsSlice";

const PostsView = () => {
    const { error, isLoading, posts } = useSelector((state) => state.posts);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [])
    console.log(posts);
    return (
        <div>
            <h1>All Post</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            <section>
                {posts && posts.map((post) => {
                    return <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                })}
            </section>
        </div>
    );
};

export default PostsView;