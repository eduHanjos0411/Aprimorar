import { useReveal } from "../../../../hooks/useReveal"
import "./servicoCardStyle.css"

interface ServiceCardProps {
  title: string
  description: string
}

export function ServicoCard({ title, description }: ServiceCardProps) {
  useReveal()

  return (
    <article className="servico-card reveal">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
