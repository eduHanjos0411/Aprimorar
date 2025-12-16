import { useReveal } from "../../hooks/useReveal";
import { ServicosGrid } from "./_components/carrossel/ServicosGrid";
import "./servicosStyle.css";

export function Servicos() {
  useReveal()

  return (
    <section
      id="servicos"
      className="services-section"
      aria-labelledby="services-title"
    >
      <header className="services-header reveal">
        <h2 id="services-title">Nossos Serviços</h2>
        <p>
          Conheça as soluções educacionais oferecidas pelo Aprimorar para apoiar
          o desenvolvimento acadêmico de cada aluno.
        </p>
      </header>

      <ServicosGrid/>
    </section>
  );
}
