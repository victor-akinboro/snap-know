import React from 'react'

function Preloader() {
    return (
        <div id="preloader" onLoad={(e)=> setTimeout((e)=>{e.target.style.display = "none"}, 2000)}>
            <div id="loader"></div>
         </div>
    )
}

export default Preloader
