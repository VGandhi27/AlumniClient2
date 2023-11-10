import {useState,useEffect,useContext}from 'react'
import {UserContext} from '../../App'
import { Link} from 'react-router-dom'
import React, { useRef,useState } from "react";
import { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
// import NoteItem from "./NoteItem";
import CreatePost from "./CreatePost";
const Home=()=> {
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
    <div className='home'>
       {
       data.map(item=>{
          return(
            <div className="card home-card" key={item._id}>
            <h5> <Link to={item.postedBy._id!=state._id?"/profile/"+item.postedBy._id:"/profile/" } >{item.postedBy.name}</Link>  
          
            {item.postedBy._id==state._id   &&
            <i className="material-icons" style={{float:"right"}}
         onClick={()=>{deletePost(item._id)}}
         >delete </i>
            } 
           </h5>
         <div className="card-image">
           <img src={item.photo} alt="" />
         </div>
          <div className="card-content">
          <i className="material-icons" style={{color:'red'}}>favorite</i>
          {item.likes.includes(state._id)
          ?
          <i className="material-icons"
          onClick={()=>{unlikePost(item._id)}}
         >thumb_down</i>
         :

         <i className="material-icons"
         onClick={()=>{likePost(item._id)}}
         >thumb_up</i> 

        }

         
           <h6>{item.likes.length} Likes</h6>
           <h6>{item.title}</h6>
           <p>{item.body}</p>
           {
             item.comments.map(record=>{
              return(
                <h6 key={record._id}><span style={{fontWeight:"500 "}}>{record.postedBy.name}</span> {record.text}</h6>
              )
             })
           }
           <form onSubmit={(e)=>{
            e.preventDefault()
            makeComment(e.target[0].value,item._id)
           }}>
           <input type="text" placeholder='add a comment' />

           </form>
          </div>
         </div>
   
          )
        })
       }
     

 
    </div>
  )
}

export default Home