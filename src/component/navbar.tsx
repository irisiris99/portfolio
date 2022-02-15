import React, { useRef } from 'react';

function Navbar() {

	const homeRef = useRef<HTMLDivElement>(null);
	const onHomeClick = () => {
		homeRef.current?.scrollIntoView({ behavior: 'smooth' });
			};
	const aboutRef = useRef<HTMLDivElement>(null);
	const onAboutClick = () => {
		aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
			};
	const portRef = useRef<HTMLDivElement>(null);
	const onPortClick = () => {
		portRef.current?.scrollIntoView({ behavior: 'smooth' });
			};
	const contactRef = useRef<HTMLDivElement>(null);
	const onContactClick = () => {
		contactRef.current?.scrollIntoView({ behavior: 'smooth' });
			};
  return (
			<div className="navbar">
				<div className="navbar_logo">
					<a href="#">KimMyeongRae</a>
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
					<button onClick={onHomeClick}><p>HOME</p></button>
					<button onClick={onAboutClick}><p>ABOUT</p></button>
					<button onClick={onPortClick}><p>PORTFOLIO</p></button>
					<button onClick={onContactClick}><p>CONTACT</p></button>
				</ul>
    	</div>
  )
}

export default Navbar;