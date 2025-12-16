import { useEffect } from "react";
import { ImageAbout } from "./_components/imageAbout/ImageAbout"
import { TextAbout } from "./_components/textAbout/TextAbout"
import { TitleAbout } from "./_components/TitleAbout/TitleAbout"

import "./aboutStyle.css"

export function About() {

  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <section id="about" className="about-section">
      <header className="header fade-in delay-1">
        <TitleAbout />
      </header>

      <article className="main-text-about fade-in delay-2">
        <TextAbout />
      </article>

      <aside className="side-image-about fade-in delay-2">
        <ImageAbout />
      </aside>
    </section>
  )
}
