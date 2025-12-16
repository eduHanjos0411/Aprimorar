import "./depoimentoCardStyle.css"

interface DepoimentoCardProps {
  name: string
  age?: number
  text: string
  date: string
  avatar: string
}

export function DepoimentoCard({
  name,
  age,
  text,
  date,
  avatar,
}: DepoimentoCardProps) {
  return (
    <article
      className="depoimento-card"
      itemScope
      itemType="https://schema.org/Review"
    >
      <figure className="depoimento-avatar">
        <img
          src={avatar}
          alt={`Depoimento de ${name}, aluno do Aprimorar`}
          loading="lazy"
          itemProp="image"
        />
      </figure>

      <div className="depoimento-content">
        <header>
          <h3 itemProp="author">{name}</h3>
          <span className="idade">{age} anos</span>
        </header>

        <blockquote itemProp="reviewBody">
          “{text}”
        </blockquote>

        <time
          dateTime={date}
          className="depoimento-data"
          itemProp="datePublished"
        >
          – {new Date(date).toLocaleDateString("pt-BR", {
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
    </article>
  )
}
