import Post from "./Post";
import {useEffect, useState} from "react";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
            .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            {posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
    )
}

export default Posts