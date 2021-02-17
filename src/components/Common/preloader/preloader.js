import preloader from "../../../Assets/images/preloader.gif";
import React from 'react'

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader