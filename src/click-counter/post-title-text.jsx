import React, { useMemo } from 'react'

const lotsOfBreaks = <><br /><br /><br /><br /><br /><br /><br /></>

export const PostTitle = ({ postTitle }) => {
    const mainText = useMemo(() => postTitle
        ? 'The title of the post with this number is'
        : 'There is no post with this number', [postTitle])

    const snarkyComment = useMemo(() => postTitle ? '... catchy right?' : '... bummer', [postTitle])
    return (
        <>
            {mainText}
            <h3>{postTitle || ''}</h3>
            {lotsOfBreaks}
            <small><i>{snarkyComment}</i></small>
        </>

    )
}