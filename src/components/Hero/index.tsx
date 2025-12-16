import { useReveal } from "../../hooks/useReveal";
import { CtaButton } from "../CtaButton/CtaButton"
import { LogoHero } from "./_components/LogoHero"
import "./heroStyle.css"

export function Hero() {
    useReveal()

  return (
    <section
      id="inicio"
      className="hero-section"
      aria-labelledby="hero-title"
    >
      <article className="texto-hero reveal">
        <LogoHero />

        <h1 id="hero-title">
          Eleve seus estudos com acompanhamento educacional individualizado
        </h1>

        <p className="hero-subtitle">
          No Aprimorar, desenvolvemos métodos de estudo eficientes para
          potencializar o aprendizado e os resultados acadêmicos.
        </p>

        <span>
          <CtaButton />
        </span>
      </article>
    </section>
  );
}
