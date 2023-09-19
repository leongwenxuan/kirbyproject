'use client'

import React , {useState} from 'react';
import Image from 'next/image';

export default function Home() {
  const contentList = [
    { title: "Content 1", image: "/images/1.jpg" },
    { title: "Content 2", image: "/images/2.jpg" },
    { title: "Content 3", image: "/images/3.jpg" },
    { title: "Content 4", image: "/images/4.jpg" },
    { title: "Content 5", image: "/images/5.jpg" },
    { title: "Content 6", image: "/images/6.jpg" },
    { title: "Content 7", image: "/images/7.jpg" },
    { title: "Content 8", image: "/images/8.jpg" },
    { title: "Content 9", image: "/images/9.jpg" },
    { title: "Content 10", image: "/images/10.jpg" },
    { title: "Content 11", image: "/images/11.jpg" },
    { title: "Content 12", image: "/images/12.jpg" },
    { title: "Content 13", image: "/images/13.jpg" },
    { title: "Content 14", image: "/images/14.jpg" },
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