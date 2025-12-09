import { CtaButton } from "./_components/CtaButton/CtaButton";
import { NavItem } from "./_components/NavItem/NavItem";

import './header.css'

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
    href: "#aprovacoes",
    text: "Aprovações",
  },
]

export function Header() {

  return (
    <header className="header-container">
      <img className="header-logo">

      </img>
      <nav className="header-nav">
        {NavItems.map((item) => {
          return (
            <NavItem key={item.id} href={item.href} text={item.text}/>
          )
        })}
        <CtaButton/>
      </nav>
    </header>
  )
}