import React, { useState, useEffect } from 'react'
import { PostTitle } from './post-title-text';

export const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0)
    const [postTitle, setPostTitle] = useState('')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${clickCount}`)
            .then(response => response.json())
            .then(json => setPostTitle(json.title))

    }, [clickCount])

    return (
        <p>
            You have clicked this button &nbsp;
            <button onClick={() => setClickCount(clickCount + 1)}>
                {clickCount}
            </button>
            &nbsp; times.
            <br />
            <br />
            <PostTitle postTitle={postTitle} />
        </p>
    )
}