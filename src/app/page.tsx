"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './components/hero';
import Section2 from './components/section2';

export default function Home() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select all elements with class 'section'
    const sections = document.querySelectorAll('.section');

    sections.forEach((section) => {
      // Get the 'data-color' attribute value
      const color = section.getAttribute('data-color');

      // Create a ScrollTrigger for each section
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => gsap.to(document.body, { backgroundColor: color!, duration: 1 }),
        onLeave: () => gsap.to(document.body, { backgroundColor: '#defaultColor', duration: 1 }),
        onEnterBack: () => gsap.to(document.body, { backgroundColor: color!, duration: 1 }),
        onLeaveBack: () => gsap.to(document.body, { backgroundColor: '#defaultColor', duration: 1 }),
      });
    });
  }, []);

  return (
    <main>
      <Hero />
      <Section2 />
    </main>
  );
}
