import React, { useState } from 'react'
import noteContext from "../context/notes/noteContext";
import { useContext } from 'react';
import M from 'materialize-css';
import "../styles/base.css";
const AddNote=(props)=> {
    const context=useContext(noteContext);
    const { addNote}=context;


    const [note, setNote] = useState({title :"", description:"", tag:""})
    const handleClick=(e)=>{
     e.preventDefault();
     addNote(note.title,note.description,note.description);
     setNote({title :"", description:"", tag:""})
     M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})

    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value })
    }
  return (
    <>
     
       <div className="card input-filed"
       style={{
           margin:"20px auto",
           maxWidth:"700px",
           padding:"40px",
           textAlign:"center"
       }}>
         
         <input
           type="text"
           className="form-control"
           id="title" name="title" value={note.title} placeholder="Title" 
           aria-describedby="emailHelp" onChange={onChange}  minLength={5} required data-length="50"
         />
         <input
           type="text"
          name="description" value={note.description} placeholder='Body'
           id="exampleInputPassword1" onChange={onChange}  minLength={5} required data-length="500"
         />
         <input
           type="text"
           name="tag" value={note.tag} placeholder='Tag'
           id="tag" onChange={onChange}  minLength={5} required
         />
       <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" multiple
                // value={note.tag}
                // id="tag" onChange={onChange} 
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder='Upload one or more files' />
            </div>
            </div>
      
       <button disabled={note.title.length<5||note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
        Add Note
       </button> </div>
</>
    
  )
}

export default AddNote