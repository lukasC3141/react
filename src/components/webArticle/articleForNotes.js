import React from 'react'
import "./articleForNotes.css"

function ArticleForNotes(props) {
  return (
    <>
        <article>
            <div className="article-note">
                <h1 className="article-note-title">{props.title}</h1>
                <ul className='notes'>
                    {props.article}
                </ul>
            </div>
        </article>
    </>
  )
}

export default ArticleForNotes