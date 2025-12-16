import { DepoimentoCard } from "./_components/DepoimentosCard"
import "./depoimentosStyle.css"

const depoimentos = [
  {
    name: "Bernardo Izido Fecury",
    age: 17,
    text:
      "Chegando de um outro estado me senti como um deslocado. Durante meus primeiros meses em um ambiente diferente, tive dificuldades para me adaptar, porém, encontrei um espaço acolhedor no Aprimorar, onde obtive ajuda para desenvolver meus métodos de estudos e evoluir como pessoa. Um lugar excelente, com profissionais excelentes, a Denyse mostra como é possível dar educação de qualidade da forma mais humana e positiva possível, mostrando que ainda temos espaço para evolução e meios para desafiarmos nós mesmos.",
    date: "2020-10",
    avatar: "menino.png",
  },
  {
    name: "Giovana Soares",
    age: 15,
    text:
      "No Aprimorar, percebi que o ritmo de estudo tem que estar adequado ao estilo da gente pra dar certo. Sou muito grata por todas as dicas e conselhos, que me ajudaram a me organizar e me deixaram mais tranquila na hora de realizar provas e teste. Aprendi que também não é sobre se matar de estudar, é preciso também ter calma e acreditar em si mesmo. Isso fez toda a diferença. Sem esse apoio meu ano teria sido bem mais difícil! Obrigado pelo carinho sempre. ",
    date: "2020-11",
    avatar: "menina.png",
  },
  {
    name: "Patricia Soares",
    text: "O Aprimorar chegou em minha vida como um raiozinho de sol! Mãe de adolescentes a procura de soluções práticas para motivá-los e organizá-los, fui apresentada a essa pessoa de luz que é a Denyse... e vi que neste projeto por ela desenvolvido criativa e carinhosamente, algumas barreiras sendo rompidas com a minha filha, passando a planejar seu tempo, otimizar sua rotina, engajar-se nos estudos... tudo de um jeito natural, sem deixar de curtir, de respeitar seu timing, de ter leveza... em outra situação, recorri à equipe de reforço escolar e a satisfação foi a mesma... a equipe do Aprimorar é toda jovial, fala a língu do meninos... a coisa flui e os resultados são impressionantes!",
    date: "2020-11",
    avatar: "menina.png"
  }
]

export function Depoimentos() {
  return (
    <section
      className="depoimentos-section"
      id="depoimentos"
      aria-labelledby="depoimentos-title"
    >
      <header className="depoimentos-header">
        <h2 id="depoimentos-title">
          O que nossos alunos dizem
        </h2>
        <p>
          Depoimentos reais de estudantes que transformaram sua forma de aprender
          com o Aprimorar.
        </p>
      </header>

      <div className="depoimentos-grid">
        {depoimentos.map((item, index) => (
          <DepoimentoCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
