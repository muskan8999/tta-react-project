import React from 'react'

export default function Layout() {
  return (
    <div className='body'>
        <div style={{border:"1px solid black", height:"90px", width:"30%", float:"left"}}>
           <p id='hl'> LOREM IPSUM</p>
        </div>
        <div style={{border:"1px solid black", height:"90px"}}>
           <p id='hr'> LINK1</p>
        </div>
       
        <div  style={{border:"1px solid black", height:"500px",width:"50%",float:"left"}}>   
        <p id='content'>This is some content Aligned in the center vertically and horizontally</p>
        </div>
        <div style={{border:"1px solid black", height:"500px",width:"50%" }}>
  
        </div>
       
        <div style={{border:"1px solid black", height:"195px"}}>
            <p id='footer'>This is footer content</p>
        </div>


    </div>
  )
}
