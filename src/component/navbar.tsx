import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const HomeRef = useRef<HTMLDivElement>(null);
  const onHomeClick = () => {
    HomeRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
  
  const AboutRef = useRef<HTMLDivElement>(null);
  const onAboutClick = () => {
    AboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

  const PortRef = useRef<HTMLDivElement>(null);
  const onPortClick = () => {
    PortRef.current?.scrollIntoView({ behavior: 'smooth' });
      };
	const ContactRef = useRef<HTMLDivElement>(null);
	const onContactClick = () => {
		ContactRef.current?.scrollIntoView({ behavior: 'smooth' });
			};
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
				<a className="navbar__availability--link">
            <div className="navbar__availability">
                <p>
                    WELCOME TO MY PORTFOLIO <span className="dot"></span>&nbsp;&nbsp;
                    WELCOME TO MY PORTFOLIO <span className="dot"></span>&nbsp;&nbsp;
                    WELCOME TO MY PORTFOLIO <span className="dot"></span>&nbsp;&nbsp;
                </p>
                <p>
                    WELCOME TO MY PORTFOLIO <span className="dot"></span>&nbsp;&nbsp;
                    WELCOME TO MY PORTFOLIO <span className="dot"></span>&nbsp;&nbsp;
                    WELCOME TO MY PORTFOLIO <span className="dot"></span>&nbsp;&nbsp;
                </p>
            </div>
        </a>
				<ul>
					<li><a href="#" onClick={onHomeClick}>HOME</a></li>
					<li><a href="#" onClick={onAboutClick}>ABOUT</a></li>
					<li><a href="#" onClick={onPortClick}>PORTFOLIO</a></li>
					<li><a href="#" onClick={onContactClick}>CONTACT</a></li>
				</ul>
    	</div>
		</div>
  )
}

export default Navbar;