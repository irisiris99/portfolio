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
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 28px;
	margin: 5% 15%;
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
						<h1>Vacation House - Blanc -</h1>
						<p>Black & White 디자인의 웹 사이트로 해외 바다 근처의 펜션 하우스를 이미지해서 제작했습니다.</p>
						<p>주 고객층이 20대~40대의 젊은 여성 / 관광목적의 여행단체인 것을 고려하여 설명을 최대한 줄이고, 펜션 내/외부 이미지 위주로 제작하였습니다</p>
						<p>TypeScript / React 개발 환경에 조금 더 익숙해지고 깊게 이해하기 위해 React Hooks의 useEffect를 활용한 Scroll Event / React-Router-Dom으로 Page Component 관리 등의 다양한 기능을 사용했습니다. </p>
					</div>
				</div>
				<div className="slide">
					<Slide img={img2} />
					<p>asdfasd</p>
				</div>
				<div className="slide">
					<Slide img={img3} />
					<p>asdfasd</p>
				</div>
				<div className="slide">
					<Slide img={img4} />
					<p>asdfasd</p>
				</div>
      </SliderContainer>
      <Button onClick={prevSlide}>Prev</Button>
      <Button onClick={nextSlide}>Next</Button>
    </Container>
  );
}