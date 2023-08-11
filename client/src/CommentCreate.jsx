import React, { useState } from 'react'
import axios from 'axios'

const CommentCreate = ({postID}) => {
    const [comment, setComment] = useState("")
    const onSubmit = async (e) =>{
        e.preventDefault();
        const res = await axios.post(`http://localhost:4001/posts/${postID}/comments`, {comment})
        if(res.status === 201){
            alert("Successfully created!")
        }
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="commentInput">New Comment</label>
                <input type="text" value={comment} onChange={e => setComment(e.target.value)} name='commentInput' className="form-control" />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default CommentCreate