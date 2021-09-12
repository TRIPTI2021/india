import React from 'react';
import Salutes from './Salute.jpg';
import Last from './Last.mp3';
function India()
{
    return(
        <>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <audio src={Last} autoPlay></audio>
        <h1 style={{fontSize:"40px",marginLeft:"40px",color:"black"}}><b>*India Is a country with "Unity In Diversity."<br/>
        *Indian culture is well known for it's customs , religions , spirutial values etc...<br/>
        *WE ARE PROUD TO BE INDIANS!!
        <br/>
        (DONE BY : TRIPTI)<span>**kindly Salute the national anthem</span><br/>
        <span><img src={Salutes} height="250px" width="300px"/></span>
        </b></h1>
        </>
    );
}
export default India;