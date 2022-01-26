import React, { Component, useEffect, useRef, useState } from 'react';
import Navbar from '../component/navbar';
import Particles from '../component/Particles';
import Slider from '../component/Slider';

function Home() {
  return (
    <div className="Home">
      <Particles />
      <Navbar />
      <HomeContent />
      <AboutContent />
      <PortfolioContent />
      <Slider />
    </div>
  );
}



function HomeContent () {
  return (
    <div className="Home">
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
  )
}

function AboutContent () {
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
      </div>
      <div className="transition-text2" style={{
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
      <div className="About-Me">
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
              <h6>　26 Years ( 1997. 02. 15 )</h6>
            </div>
            <div>
              <p>Nationality</p>
              <h5>:</h5>
              <h6>　South Korea</h6>
            </div>
            <div>
              <p>Aderss</p>
              <h5>:</h5>
              <h6>　경기도 안산시 단원구</h6>
            </div>
            <div>
              <h3># 집중력 ( Concentration  )</h3>
            </div>
            <div>
              <h3># 긍정적인 사고 ( Positive Thought )</h3>
            </div>
            <div>
              <h3># 문제해결 능력 ( Problem-Solving Ability )</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PortfolioContent () {
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
      <div>
        <h1>MY PROJECTS</h1>
      </div>
    </div>
  )
}

export default Home;