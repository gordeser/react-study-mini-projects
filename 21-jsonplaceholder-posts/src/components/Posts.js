import Post from "./Post";
import {useEffect, useState} from "react";

function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, [])

    return (
        <div>
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts