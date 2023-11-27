import React, { useRef,useState } from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import M from 'materialize-css';
import {useNavigate} from 'react-router-dom'

const Profile = () => {
  const context = useContext(noteContext);

  const { notes, getmyNotes ,editNote} = context;
  let navigate =useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token')){
      getmyNotes();

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
    <div>
      <div style={{maxWidth:"1000px", margin:"0px auto" }}>
    <div 
    style={{
      display:"flex",
      justifyContent:"space-around",
      margin:"20px 0px",

    }}
    >
      <div>
        <img  alt="" style={{width:"160px",height:'160px',borderRadius:"80px"}}
        src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
      </div>
      <div>
        <h4>Vidushi Gandhi</h4>
        
        <h5>ML and AI Developer|GDSC Technical Lead |B.Tech CSE Student|5 ★ Java @ Hacker Rank | Full Stack Developer | Competitive Coder| TECHLON Winner| Blogger |
          {/* “The way to succeed is to double your failure rate.” */}
          </h5>
          <div style={{display:"flex", justifyContent:"space-between",padding:"20px" ,width:"108%"}}>
          <h5>20 followers</h5>
          <h5>20 following</h5>
          <h5>Contact</h5>

        </div>
      </div>
    </div>

    <div className='gallery'>
    <div className="row my-3">
 <center><h1>My Posts</h1></center>
 <div className="container">
 {notes.length===0 &&'No Notes Available'}</div>
 {notes.map((note) => {
   return (
     <NoteItem key={note._id}  showAlert={M} updateNote={updateNote} note={note} />
   );
 })}
</div>
    </div>
    </div>
    </div>
  )
}

export default Profile
