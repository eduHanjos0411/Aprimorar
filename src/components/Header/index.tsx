import { useState } from "react";
import { CtaButton } from "../CtaButton/CtaButton";
import { NavItem } from "./_components/NavItem/NavItem";

import './headerStyle.css'

interface NavItemProps {
  id: number
  href: string,
  text: string
}

const NavItems: NavItemProps[] = [
  {
    id: 1,
    href: "#about",
    text: "Sobre Nós",
  },
  {
    id: 2,
    href: "#servicos",
    text: "Serviços",
  },
  {
    id: 3,
    href: "#depoimentos",
    text: "depoimentos",
  },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <a href="#top" aria-label="Página inicial Aprimorar">
        <img
          className="header-logo"
          src="LogoSemTexto.png"
          alt="Aprimorar Espaço Multidisciplinar de Aprendizagem"
        />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu de navegação"
        aria-expanded={menuOpen}
      >
        ☰
      </button>

      <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
        {NavItems.map(item => (
          <NavItem key={item.id} href={item.href} text={item.text} />
        ))}
        <CtaButton />
      </nav>
    </header>
  );
}