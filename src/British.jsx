import React from 'react';
import Britishr from './British.png';
import Tilak from './B.G. Tilak.png';
import Ss from './s.png';
import Mm from './m.png';
import Salt from './salt.jpg';
import Gandhiji from './Gandhi.png'

function British()
{
    return(
        <>
            <center><img src={Britishr}/></center>
            <center><h2 style={{color:"black"}}><b>India Was the “Jewel of the British Empire”</b></h2></center>
            <br/><br/>
            <img src={Tilak}/><br/><br/><br/>
            <img src={Gandhiji} style={{marginLeft:"480px",height:"700px"}}/><br/><br/>
            <img src={Ss}/><br/><br/>
            <img src={Mm} style={{marginLeft:"480px",height:"700px"}}/><br/><br/>
            <center><img src={Salt}/></center>
        </>
    );
}
export default British;