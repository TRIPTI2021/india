import React from 'react';
import { NavLink } from 'react-router-dom';
function Nav()
{
    return(
        <>
 <nav className="navbar navbar-expand-sm text-dark justify-content-center" style={{backgroundImage:"url('https://img.freepik.com/free-vector/indian-flag-creative-banner-with-text-space_1017-32897.jpg?size=626&ext=jpg')"}}>
  <NavLink className="navbar-brand text-dark" to="/" style={{marginLeft:"20px",fontSize:"35px"}}><b>Home</b></NavLink>
  <NavLink className="navbar-brand text-dark" to="/British" style={{marginLeft:"20px",fontSize:"35px"}}><b>British</b></NavLink>
  <NavLink className="navbar-brand text-dark" to="/Freedom" style={{marginLeft:"20px",fontSize:"35px"}}><b>Freedom Fighters</b></NavLink>
  <NavLink className="navbar-brand text-dark" to="/After" style={{marginLeft:"20px",fontSize:"35px"}}><b>After Indipendence</b></NavLink>
  <NavLink className="navbar-brand text-dark" to="/Unity" style={{marginLeft:"20px",fontSize:"35px"}}><b>Unity</b></NavLink>
  <NavLink className="navbar-brand text-dark" to="/Culture" style={{marginLeft:"20px",fontSize:"35px"}}><b>Culture</b></NavLink>
  <NavLink className="navbar-brand text-dark" to="/India" style={{marginLeft:"20px",fontSize:"35px"}}><b>Loving India</b></NavLink>
</nav>
<br/>
        </>
    );
}
export default Nav;