import React, { useEffect, useReducer, useMemo, useRef } from 'react'
import { PostTitle } from './post-title-text'

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementClickCount':
            return {
                ...state,
                clickCount: state.clickCount + 1
            }
        case 'setPostTitle':
            return {
                ...state,
                postTitle: action.payload
            }
        default:
            return state
    }
}

const fetchPostTitle = (clickCount, setPostTitle) => {
    useEffect(() => {
        if (clickCount === 0) {
            return
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${clickCount}`)
            .then(response => response.json())
            .then(json => setPostTitle(json.title) )

    }, [clickCount])
}

const createDispatchCreator = dispatchFunction => type =>
    payload => dispatchFunction({ type, ...(payload ? { payload } : {} ) })


export const ClickCounter = () => {
    const [ { clickCount, postTitle }, dispatch] = useReducer(reducer, {
        clickCount: 0,
        postTitle: ''
    })

    const makeDispatch = useMemo(() => createDispatchCreator(dispatch), [dispatch])

    fetchPostTitle(clickCount, makeDispatch('setPostTitle'))

    return (
        <>
            You have clicked this button &nbsp;
            <button onClick={makeDispatch('incrementClickCount')}>
                {clickCount}
            </button>
            &nbsp; times.
            <br />
            <br />
            <PostTitle postTitle={postTitle} />
        </>
    )
}