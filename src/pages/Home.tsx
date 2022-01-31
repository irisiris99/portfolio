import React, { Component, useEffect, useRef, forwardRef, useState } from 'react';
import Particles from '../component/Particles';
import Slider from '../component/Slider';
import { useSelector } from 'react-redux';


function Home() {

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
    <div className="Home">
      <Particles />
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
					<button onClick={onHomeClick}><p>HOME</p></button>
					<button onClick={onAboutClick}><p>ABOUT</p></button>
					<button onClick={onPortClick}><p>PORTFOLIO</p></button>
					<button onClick={onContactClick}><p>CONTACT</p></button>
				</ul>
    	</div>
      <HomeContent ref={homeRef}/>
      <AboutContent ref={aboutRef}/>
      <PortfolioContent ref={portRef}/>
      <Slider />
      <ContactContent ref={contactRef}/>
    </div>
  );
}


const HomeContent = forwardRef<any>((props, ref) => {
  return (
    <div id="Home-content" className="Home" ref={ref}>
      <div className="Home-title">
        <h1 id="Welcome">WELCOME TO</h1>
        <h1 id="My">MY PORTFOLIO</h1>
        <h1 id="January">2022 JANUARY PROJECT</h1>
      </div>
      <div className="Home-title2">
        <h2>#FRONT-END</h2>
        <h2>#WEB DEVELOPER</h2>
        <h2>#IRIS99</h2>
      </div>
      <div className="title-box">
        <img src="imgs/title_logo.png"></img>
      </div>
    </div>
)});

const AboutContent = forwardRef<any>((props, ref) => {
  const [position, setPosition] = useState(0);
	function onScroll() {
		setPosition(window.scrollY);
	}
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

  const age = useSelector((state)=>state[0])
  const nationality = useSelector((state)=>state[1])
  const adress = useSelector((state)=>state[2])

  return (
    <div className="About">
      <div className="transition-text" style={{
            transform : `translateX(${position / 5}px)` ,
          }}>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        
      </div>
      <div id="position-left" className="transition-text2" style={{
            transform : `translateX(-${position / 5}px)` ,
          }}>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
        <p>2022 PORTFOLIO</p>
        <h4>KIM MYEONG RAE</h4>
      </div>
      <div className="About-Me" ref={ref}>
        <div>
          <h1>ABOUT ME</h1>
        </div>
        <div className="profile">
          <div className="profile-img">
            <img src="imgs/ME.jpg"></img>
          </div>
          <div className="profile-text">
            <div>
              <p>Name</p>
              <h5>:</h5>
              <h6>　Kim Myeong Rae ( 김 명 래 )</h6>
            </div>
            <div>
              <p>Age</p>
              <h5>:</h5>
              <h6>　{age} ( 1997. 02. 15 )</h6>
            </div>
            <div>
              <p>Nationality</p>
              <h5>:</h5>
              <h6>　{nationality}</h6>
            </div>
            <div>
              <p>Aderss</p>
              <h5>:</h5>
              <h6>　{adress}</h6>
            </div>
            <div className="padding-top">
              <h3># 집중력 ( Concentration  )</h3>
            </div>
            <div>
              <h3># 성장 가능성 ( Growth Potential )</h3>
            </div>
            <div>
              <h3># 문제해결 능력 ( Problem-Solving Ability )</h3>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill-box">
            <img src="imgs/html.png" alt="HTML_icon" />
            <p>HTML</p>
          </div>
          <div className="skill-box">
            <img src="imgs/css.png" alt="CSS_icon" />
            <p>CSS</p>
          </div>
          <div className="skill-box">
            <img src="imgs/javascript.png" alt="JS_icon" />
            <p>JavaScript</p>
          </div>
          <div className="skill-box">
            <img src="imgs/typescript.png" alt="TS_icon" />
            <p>TypeScript</p>
          </div>
          <div className="skill-box">
            <img src="imgs/react.png" alt="React_icon" />
            <p>React</p>
          </div>
          
        </div>
      </div>
    </div>
)});


const PortfolioContent = forwardRef<any>((props, ref) => {
  const [position, setPosition] = useState(0);
	function onScroll() {
		setPosition(window.scrollY);
	}
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
  return (
    <div className="Portfolio">
      <div className="transition-text" style={{
            transform : `translateX(${position / 5}px)` ,
          }}>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        
      </div>
      <div className="transition-text2" style={{
            transform : `translateX(-${position / 5}px)` ,
          }}>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
        <p>ABOUT ME</p>
        <h4>MY PROJECTS</h4>
      </div>
      <div ref={ref}>
        <h1>MY PROJECTS</h1>
      </div>
    </div>
  )
});

const ContactContent = forwardRef<any>((props, ref) => {

  const phone = useSelector((state) => state[3])
  const github = useSelector((state) => state[4])
  const email = useSelector((state) => state[5])

  const [position, setPosition] = useState(0);
	function onScroll() {
		setPosition(window.scrollY);
	}
	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);
  return (
    <div className="Portfolio">
      <div className="transition-text" style={{
            transform : `translateX(${position / 5}px)` ,
          }}>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
      </div>
      <div className="transition-text2" style={{
            transform : `translateX(-${position / 5}px)` ,
          }}>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
        <p>MY PROJECT</p>
        <h4>CONTACT</h4>
      </div>
      <div className="contact-title"ref={ref}>
        <h1>KIM MEYONG RAE</h1>
      </div>
      <div className="contact-icons">
        <div>
          <img src="imgs/emailicon.png" alt="github" />
          <p>{email}</p>
        </div>
        <div>
          <img src="imgs/phoneicon.png" alt="Phone" />
          <p>{phone}</p>
        </div>
        <div>
          <img src="imgs/github2.png" alt="github" />
          <p>{github}</p>
        </div>
      </div>
      <div className="contact-end">
        <h2>《　Thank for watching My Portfolio　》</h2>
      </div>
    </div>
  )
});


export default Home;