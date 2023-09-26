'use client'

import React , {useState} from 'react';
import Image from 'next/image';

export default function Home() {
  const contentList = [
    { title: "Hey babe :> Looking cute here", image: "/images/1.jpg" },
    { title: "Thanks always entertaining my bullshit", image: "/images/2.jpg" },
    { title: "Bringing me to experience new things together", image: "/images/3.jpg" },
    { title: "Dragging me to your fav food places", image: "/images/4.jpg" },
    { title: "Making me laugh whenever your around", image: "/images/5.jpg" },
    { title: "Living with my gay ass photo poses", image: "/images/6.jpg" },
    { title: "Feeding me so much.......", image: "/images/8.jpg" },
    { title: "Always taking the cutest pictures of us", image: "/images/9.jpg" },
    { title: "Showing me your most vulnerable side", image: "/images/10.jpg" },
    { title: "Exploring places together", image: "/images/12.jpg" },
    { title: "Going on spontaneous suppers with me", image: "/images/13.jpg" },
    { title: "Love you, See you soon :>>> - Xuan", image: "/images/14.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClick = () => {
    const cardElement = document.querySelector(".card");
    cardElement.classList.toggle("flipped");
    setCurrentIndex((currentIndex + 1) % contentList.length);
  };

  return (
    <main>


      <div className="container">
        <div className="card" onClick={handleClick}>
          <div className="front">
          <Image src={contentList[currentIndex].image} alt="Next.js Logo"  width={300} height={200}/>
          <span className="nil">{contentList[currentIndex].title}</span>
          </div>
          <div className="back">
          <Image src={contentList[currentIndex].image} alt="Next.js Logo"  width={300} height={200}/>
          <span className="nil">{contentList[currentIndex].title}</span>
          </div>
        </div>
      </div>


      <div className='flipdiv'>
        <button onClick={handleClick}>Flip</button>
      </div>


    </main>
  );
}