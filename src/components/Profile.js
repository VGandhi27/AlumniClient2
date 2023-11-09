import React from 'react'

const Profile = () => {
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
    <img className='item' src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
    <img className='item' src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
    <img className='item' src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
    <img className='item' src="https://images.unsplash.com/photo-1520302723644-46526f5a7c2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80" />
    <img className='item' src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" />

    </div>
    </div>
    </div>
  )
}

export default Profile
