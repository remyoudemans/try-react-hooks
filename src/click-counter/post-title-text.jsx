import React from 'react'

export const PostTitle = ({ postTitle }) => {
    const lotsOfBreaks = <><br /><br /><br /><br /><br /><br /><br /></>
    const mainText = postTitle
        ? 'The title of the post with this number is'
        : 'There is no post with this number'

    const snarkyComment = postTitle ? '... catchy right?' : '... bummer'
    return (
        <>
            {mainText}
            <h3>{postTitle || ''}</h3>
            {lotsOfBreaks}
            <small><i>{snarkyComment}</i></small>
        </>

    )
}