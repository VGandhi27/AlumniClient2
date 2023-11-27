import React from 'react'
import { useContext } from 'react';
import noteContext from "../context/notes/noteContext";
import { AiTwotoneDelete } from "react-icons/ai";
import M from 'materialize-css';
import { FaEdit } from "react-icons/fa";
import studgath2 from "../assets/Alumni Students 1 (1).png";
const NoteItem = (props) => {
  const context =useContext(noteContext);
  const {deleteNote} =context;
  const {note, updateNote} = props;
  return (


    <>

<div className="card home-card"
//  key={item._id}
style={{
  margin:"20px auto",
  maxWidth:"700px",
  padding:"40px",
  minHeight:"600px"
}}
 >
            <h5>
              {/* {item.postedBy.name} */}
              {note.user.name}
              </h5>
         <div className="card-image">
           <img src={studgath2}
          alt="" />
         </div>
          <div className="card-content">
           <h5>{note.title} <AiTwotoneDelete style={{fontSize:'30px' ,color:'red'}} onClick={()=>{deleteNote(note._id); 
      M.toast({html:"Deleted Successfully",classes:"#43a047 green darken-1"})

}} />
<FaEdit style={{fontSize:'30px' ,color:'green'}} onClick={()=>{updateNote(note);    }} />
    
</h5>
           <h6>{note.description}</h6>
           <input type="text" placeholder='add a comment' />
          </div>
         </div>
   
       


    
    
    </>
  )
}

export default NoteItem