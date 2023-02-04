import Post from "./Post";
import {useEffect, useState} from "react";

function Posts() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
            .catch(error => setError(error.message))
    }, [])

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            {posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
    )
}

export default Posts