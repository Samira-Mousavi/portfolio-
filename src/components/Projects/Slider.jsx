import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
    {
        img : "https://images.pulsewebcontent.com/photos/2019/12_Dec/800/Roxette800_12_19.jpg",
        disc : " 90s inspired website which is accessible, responsive and contain some basic interactivity",
        link : "https://roxettegroup.netlify.app/"
    },
    {
      img : "https://www.sourcecodester.com/sites/default/files/images/razormist/Simple%20Quiz%20Game%28Movie%20Edition%29%20in%20JavaScript%201.png",
      disc : "A quiz game with JavaScript which presents a series of questions to the user and allows them to select one answer. The game is typically with a set amount of time given for the user to answer each question. Once the user has answered all of the questions, the application calculates their score and displays it to them.",
      link : "https://firtsgame.netlify.app/"
  },
    
    {
        img :"https://www.exoscale.com/static/syslog/2018-06-14-what-is-a-single-page-application/what-is-spa.png",
        disc : "A drone store made with React",
        link : "https://group3dronestore.netlify.app/"
    },
  
    {
      img : "https://images.unsplash.com/photo-1615461065624-21b562ee5566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1640&q=80",
      disc : "a website made for a customer by Figma and React ",
      link : "https://ubiquitous-gaufre-0e6db5.netlify.app/"
  },
  
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`