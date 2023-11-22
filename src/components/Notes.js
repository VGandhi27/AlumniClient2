import React, { useRef,useState } from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./CreatePost";
import {useNavigate} from 'react-router-dom'

const Notes = (props) => {
  const context = useContext(noteContext);

  const { notes, getNotes ,editNote} = context;
  let navigate =useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getNotes();

    }
    else{
      navigate("/login");
    }
  }, []);

  const ref = useRef(null)
  const refClose = useRef(null)

  const [note, setNote] = useState({id :"" ,etitle :"", edescription:"", etag:"default"})


  const updateNote = (currentNote) => {
    ref.current.click();

    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  };

  const handleClick=(e)=>{
    console.log("Updating the note",note)
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully", "success")


   }
   const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value })
   }
 
  
  return (
    <>
      <div className="container my-2">
        {" "}
        <AddNote showAlert={props.showAlert}/>
      </div>
      <button  ref={ref}type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal 
</button>
     
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
               Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              
    {/* Form for entry */}
     <form className="my-3">
       <div className="mb-3">
         <label htmlFor="title" className="form-label">
          Title
         </label>
         <input
           type="text"
           className="form-control"
           id="etitle" name="etitle" value={note.etitle}
           aria-describedby="emailHelp" onChange={onChange} minLength={5} required
         />
         
       </div>
       <div className="mb-3">
         <label htmlFor="description" className="form-label">
         Description
         </label>
         <input
           type="textarea"
           className="form-control" name="edescription" value={note.edescription}
           id="exampleInputPassword1" onChange={onChange} minLength={5} required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="tag" className="form-label">
        Tag
         </label>
         <input
           type="text"
           className="form-control" name="etag" value={note.etag}
           id="etag" onChange={onChange}
         />
       </div>
      
     </form>
            
              </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refClose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button disabled={note.etitle.length<5||note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">
               Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Your Notes */}
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container">
        {notes.length===0 &&'No Notes Available'}</div>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id}  showAlert={props.showAlert} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;