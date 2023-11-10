import React,{useState,useContext} from 'react'
import noteContext from "../context/notes/NoteState";
// import M from 'materialize-css'
// import {useNavigate} from 'react-router-dom'
// import Img2 from '../assets/Alumni Students 0 (2).png'
const CreatePost = (props) => {
//     let navigate =useNavigate();
//   const [title,setTitle] = useState("")
//     const [body,setBody] = useState("")
//     const [image,setImage] = useState("")
//     const [url,setUrl] = useState("")
//     useEffect(()=>{
//        if(url){
//         fetch("https://super-bassoon-495qjjvxq5q3qgq5-5000.app.github.dev/api/auth/createpost",{
//             method:"post",
//             headers:{
//                 "Content-Type":"application/json",
//                 "Authorization":"Bearer "+localStorage.getItem("jwt")
//             },
//             body:JSON.stringify({
//                 title,
//                 body,
//                 pic:url
//             })
//         }).then(res=>res.json())
//         .then(data=>{
        
//            if(data.error){
//               M.toast({html: data.error,classes:"#c62828 red darken-3"})
//            }
//            else{
//                M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
//                navigate('/')
//            }
//         }).catch(err=>{
//             console.log(err)
//         })
//     }
//     },[url])
  
//    const postDetails = ()=>{
//        const data = new FormData()
//        data.append("file",image)
//        data.append("upload_preset","insta_clone")
//        data.append("cloud_name","dcyysbj41")
//        fetch("https://api.cloudinary.com/v1_1/dcyysbj41/image/upload",{
//            method:"post",
//            body:data
//        })
//        .then(res=>res.json())
//        .then(data=>{
//           setUrl(data.url)
//        })
//        .catch(err=>{
//            console.log(err)
//        })

    
//    }

const context=useContext(noteContext);
const { addNote}=context;


const [note, setNote] = useState({title :"", description:"", tag:""})
const handleClick=(e)=>{
 e.preventDefault();
 addNote(note.title,note.description,note.description);
 setNote({title :"", description:"", tag:""})
 props.showAlert("Added Successfully", "success")

}
const onChange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value })
}
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
            id="title" name="title" value={note.title}
            onChange={onChange}
            />
           <input
            type="text"
             placeholder="body"
             name="description" value={note.description}
            onChange={onchange}
             />
           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload Image</span>
                <input type="file" multiple
                value={note.tag}
                id="tag" onChange={onChange} 
                />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" placeholder='Upload one or more files' />
            </div>
            </div>
            <button disabled={note.title.length<5||note.description.length<5} className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={handleClick}
            
            >
                Submit post
            </button>

       </div>
   )
}
  


export default CreatePost
