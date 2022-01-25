import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });
  return (
    <div className={scrollPosition < 100 ? "navbar" : "change_navbar"}>
			<div className="navbar">
				<div className="navbar_logo">
					<a href="#">KimMeyongRae</a>
				</div>
				<button className="navbar_btn">· Welcome To My Portfolio</button>
				<ul>
					<li><a href="#">HOME</a></li>
					<li><a href="#">ABOUT</a></li>
					<li><a href="#">PORTFOLIO</a></li>
					<li><a href="#">CONTACT</a></li>
				</ul>
    	</div>
		</div>
  )
}

export default Navbar;