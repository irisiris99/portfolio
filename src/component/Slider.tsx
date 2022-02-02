import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../importimg/PORTFOLIO-1.jpg";
import img2 from "../importimg/PORTFOLIO-2.jpg";
import img3 from "../importimg/PORTFOLIO-3.jpg";
import img4 from "../importimg/PORTFOLIO-4.jpg";

const Container = styled.div`
  width: 100%;
	text-align:center;
	margin: 5% 0%;
	border-radius: 0%;
	padding-bottom: 100px;
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 28px;
	margin: 1% 10%;
	cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: black;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 400vw;
	margin: auto;
  display: flex;
`;


const TOTAL_SLIDES = 3;
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef<any>();
	const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
	

	useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide * 100}vw)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
	return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
				<div className="slide">
					<Slide img={img1} />
					<div className="slide-text">
						<div className="slide-title-github">
							<h1>Vacation House - Blanc -</h1>
							<a href="https://irisiris99.github.io/blanc/" target="_blank"><img src="imgs/github.png" /></a>
						</div>
						<p className="delete" >Black & White 디자인의 웹 사이트로 해외 바다 근처의 펜션 하우스를 이미지해서 제작했습니다.</p>
						<p className="delete" >주 고객층이 20대~40대의 젊은 여성 / 관광목적의 여행단체인 것을 고려하여 직관적이고 빠른 펜션 소개를 위해 설명을 최대한 줄이고, 펜션 내/외부 이미지 위주로 제작하였습니다</p>
						<p className="delete" >TypeScript / React 개발 환경에 익숙해지기 위해 다양한 기능을 알아보고 사용했습니다.</p>
						<p><b>《 이번 프로젝트 작업 과정을 통해 얻은 경험 및 지식 》</b></p>
						<p>※ useState, useEffect 를 활용해 Scroll 값 변화에 따라 이동하는 Background / Font 구현 경험<br/>※ framer-motion을 통한 Page Component 이동 시 Animation 효과 구현 경험<br />※ React-Router-Dom 으로 Page Components 관리 경험<br/>※ useRef로 지정된 Button onClick시 특정 HTML 태그 위치로 이동하는 기능 구현 경험<br />※ Redux 배열 형식의 State 관리 경험 </p>
						<h3>#HTML　#CSS　#TypeScript　#React　#React-Hooks　#Redux　#React-Router-Dom</h3>
					</div>
				</div>
				<div className="slide">
					<Slide img={img2} />
					<div className="slide-text">
						<div className="slide-title-github">
							<h1>Benz Clone Coding Website</h1>
							<a href="https://irisiris99.github.io/Benz/" target="_blank"><img src="imgs/github.png" /></a>
						</div>
						<p className="delete" >Bezn Official Website를 참고하여 트렌디하고 직관적인 UI Design으로 리모델링 제작했습니다.</p>
						<p className="delete" >React 를 이해하고 개발환경 변화에 적응하는 것에 중점을 두었습니다.<br/>* 사용된 Background / Image 들은 Photoshop 으로 작업했습니다.</p>
						<p><b>《 이번 프로젝트 작업 과정을 통해 얻은 경험 및 지식 》</b></p>
						<p>※ React 에서 지켜야 할 다양한 문법에 대한 이해<br/>※ 함수형 Component와 클래스형 Component의 차이와 useState / props 의 사용법을 이해하고 적용해보기<br/>※ React 작업 폴더를 build 하고 github에 deploy하는 과정에 대한 경험 및 이해<br/>※ Redux를 활용한 상태 관리 경험</p>
						<h3>#HTML　#CSS　#JavaScript　#React　#Redux</h3>
					</div>
				</div>
				<div className="slide">
					<Slide img={img3} />
					<div className="slide-text">
						<div className="slide-title-github">
							<h1>Aimer Clone Coding Website</h1>
							<a href="https://irisiris99.github.io/Aimer/" target="_blank"><img src="imgs/github.png" /></a>
						</div>
						<p className="delete" >개인적으로 좋아하는 가수인 Aimer 의 Official Website를 리모델링 제작했습니다.</p>
						<p><b>《 이번 프로젝트 작업 과정을 통해 얻은 경험 및 지식 》</b></p>
						<p>※ HTML5 / CSS3 마크업 능력 향상<br/>※ Responsive 작업 능력 향상<br/>※ Jqeury 숙련도 향상<br/>※ 깔끔한 UI Design 대한 고찰</p>
						<h3>#HTML　#CSS　#JavaScript　#Jquery</h3>
					</div>
				</div>
				<div className="slide">
					<Slide img={img4} />
					<div className="slide-text">
						<div className="slide-title-github">
							<h1>Vanila JavaScript To-Do-List</h1>
							<a href="https://irisiris99.github.io/To-Do-List/" target="_blank"><img src="imgs/github.png" /></a>
						</div>
						<p className="delete" >JavaScript를 조금 더 깊게 이해하기 위해 작업한 프로젝트 입니다.</p>
						<p className="delete" >◎ NomadCoder JS 강의를 통해 기능을 이해 & 구현하며 작업을 진행했습니다.</p>
						<p><b>《 이번 프로젝트 작업 과정을 통해 얻은 경험 및 지식 》</b></p>
						<p>※ localStorage에 input값과 함께 저장된 username을 H1 태그에 나타내주는 Login 기능 구현 경험<br/>※ Data Object를 활용해 현재 Hours, Minutes, Seconds 를 1초마다 나타내주는 Clock기능 구현 경험<br />※ Math.random + Math.floor을 통해 Random Background Image / Random 명언 기능 구현 경험<br/>※ addEventListener, JSON.stringify 등의 다양한 기능과 함수를 이용한 To-Do-List 등록/삭제 구현 경험<br />※ openweathermap의 날씨 API를 받아와서 나타내주는 기능 구현 경험</p>
						<h3>#HTML　#CSS　#JavaScript</h3>
					</div>
				</div>
      </SliderContainer>
      <Button onClick={prevSlide}>Prev</Button>
      <Button onClick={nextSlide}>Next</Button>
    </Container>
  );
}