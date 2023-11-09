import React from 'react'
import Img2 from '../assets/Alumni Students 0 (2).png'
const CreatePost = () => {
  return (
    <div className="card input-filed"
       style={{
           margin:"20px auto",
           maxWidth:"700px",
           padding:"40px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="title"
            // value={title}
            // onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="body"
            //  value={body}
            // onChange={(e)=>setBody(e.target.value)}
             />
           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" multiple
                // onChange={(e)=>setImage(e.target.files[0])} 
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder='Upload one or more files' />
            </div>
            </div>
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            // onClick={()=>postDetails()}
            
            >
                Submit post
            </button>

       </div>
   )
}
  


export default CreatePost
