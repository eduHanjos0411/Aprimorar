import './NavItem.css'

export function NavItem({ text, href }: { text: string, href: string }) {
  return <a className="nav-link" href={href}> {text} </a>
}