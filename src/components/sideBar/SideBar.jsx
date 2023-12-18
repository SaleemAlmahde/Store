import React, { useEffect, useState } from 'react';
import './style.css'
import '../../assets/plugins/font-awesome/fonts/fontawesome-webfont.svg'


const SideBar = () => {

const [isActive,setIsActive]=useState(true)

useEffect(()=>{

}, [isActive])

    return (
        <div class={isActive ? "side-nav-bar active" : "side-nav-bar"}>
        <div class="container">
        <div class="logo">
            <div class="logo-img">
            <img src="assets/images/logo (1).png" alt="logo"></img>
        </div>
        <button id="side-bar-btn" onClick={()=>{
            if(isActive===false){
            setIsActive(true)
            console.log(isActive)
        }else{
            setIsActive(false)
            console.log(isActive)
        }
        }}>
        {/* <i class="fa fa-bars " id="btn"></i> */}
        hello
    </button>
        </div>
        <ul class="sidebar-menu">
        <li><a href="index2.html">
            <i class="fa fa-search"></i>
            <span>Search</span>
        </a>
        
    </li>
    <li><a href="">
        <i class="fa fa-dashcube"></i>
        <span>Dashboard</span>
    </a>
    
</li>
<li><a href="">
    <i class="fa fa-hand-grab-o"></i>
    <span>Pets</span>
</a>

</li>
<li><a href="">
    <i class="fa fa-user-o"></i>
    <span>Clients</span>
</a>

</li>
<li><a href="">
    <i class="fa fa-user-md"></i>
    <span>Vets</span>
</a>

</li>
<li><a href="">
    <i class="fa fa-cog"></i>
    <span>Setting</span>
</a>

</li>
</ul>
</div>
<div class="profile">
    <div class="profile-content">
    <div class="profile-img">
        <img src="assets/images/3.png" alt="profile-img"></img>
    </div>
    <div class="profile-info">
        <h4>Diego Ferreira</h4>
        <p>Veterinarian</p>
    </div>
</div>
    <button id="log-out">
        <i class="fa fa-sign-out"></i>
    </button>
</div>
    </div>

    );
    
}

export default SideBar;
