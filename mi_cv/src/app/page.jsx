"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import "../style/inicio.css";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";

function HomePage() {
  const names = ['Ing. Informatico', 'Full Stack', 'Software Development'];
  const [currentName, setCurrentName] = useState('');
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) return;

    const handleTyping = () => {
      const fullName = names[currentNameIndex];
      let nextLetterIndex = letterIndex;
      let newCurrentName = currentName;

      if (isDeleting) {
        nextLetterIndex--;
        newCurrentName = fullName.slice(0, nextLetterIndex);
      } else {
        nextLetterIndex++;
        newCurrentName = fullName.slice(0, nextLetterIndex);
      }

      setCurrentName(newCurrentName);
      setLetterIndex(nextLetterIndex);

      if (!isDeleting && nextLetterIndex === fullName.length) {
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIsDeleting(true);
        }, 1000);
      } else if (isDeleting && nextLetterIndex === 0) {
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIsDeleting(false);
          setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        }, 500);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, pause, currentNameIndex]);

  return (
    <div className="wrapper">
      <video autoPlay muted loop className="video">
        <source src="/video/fondo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="slide-bottom">
        <Navbar />
        <div className="content">
          <div className="aki">
            <h3 className="nombre">RENZO GONZALES</h3>
            <Typography variant="h4" component="div" className="soy typingEffect">
              Yo soy {currentName}
            </Typography>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default HomePage;
