    import React from 'react';
    import { NavLink } from 'react-router-dom';
import India from './India.png'
import First from './First.mp3'
    function Plane()
    {
        return(
            <>
            <audio src={First} autoPlay></audio>
            <h3 style={{fontSize:"35px",marginLeft:"40px",color:"black"}}><b>The three colours are 
    Saffron, White, and Green. <br/>
    *Saffron: The saffron colour of the flag is a symbol of courage and sacrifice. <br/>
    *White: The white colour represents honesty, peace, and purity. <br/>
    *Green: The green colour represents faith and chivalry.<br/>
    </b></h3>
    <center><img src={India}/></center><br/>
            </>
        );
    }
    export default Plane;