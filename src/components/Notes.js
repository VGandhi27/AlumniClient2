import React, { useRef,useState } from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import M from 'materialize-css';
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

  useEffect(() => {
    const elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {}); // Initialize modals
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
    M.toast({html:"Updated Successfully",classes:"#43a047 green darken-1"})


   }
   const onChange=(e)=>{
       setNote({...note,[e.target.name]:e.target.value })
   }
 
  
  return (
 <>


{/* Your Notes */}
<div className="row my-3">
 <center><h1>All Posts</h1></center>
 <div className="container">
 {notes.length===0 &&'No Notes Available'}</div>
 {notes.map((note) => {
   return (
     <NoteItem key={note._id}  showAlert={M} updateNote={updateNote} note={note} />
   );
 })}
</div>


   
         
 
   
</>
  );
};

export default Notes;