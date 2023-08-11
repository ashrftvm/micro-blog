import React, { useState } from 'react'
import axios from 'axios'

const PostCreate = () => {
  const [title, setTitle] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:4000/posts", {title})
    if(res.status === 201){
      alert("Created Successfully")
    }else{
      alert("Some error happened while creating posts!")
    }
    setTitle("");
  }
  return (
    <div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default PostCreate