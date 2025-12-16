import { ServicoCard } from "../card/ServicoCard";
import "./servicoGridStyle.css";

const services = [
  {
    title: "Acompanhamento Escolar",
    description:
      "Apoio individualizado para reforçar conteúdos escolares e desenvolver autonomia nos estudos.",
  },
  {
    title: "Preparatório Enem e Vestibulares",
    description:
      "Preparação focada em Matemática, Ciências da Natureza e redação, com métodos práticos e teóricos para resolução de problemas e desenvolvimento da escrita, visando altas pontuações.",
  },
  {
    title: "Mentoria de Estudos",
    description:
      "Orientação estratégica para criar rotinas produtivas, estudar com eficiência, planejar metas, manter a motivação e gerenciar estresse e ansiedade.",
  },
  {
    title: "Acompanhamento Psicopedagógico",
    description:
      "Atendimento individualizado para dificuldades de aprendizagem, com escuta atenta e estratégias personalizadas para transformar o processo de aprendizagem.",
  },
  {
    title: "Orientação Vocacional Profissional",
    description:
      "Auxílio no autoconhecimento e na escolha profissional, alinhando interesses, habilidades e possibilidades acadêmicas.",
  },
  {
    title: "Consultoria para Estudar no Exterior",
    description:
      "Apoio completo para estudar fora do Brasil, preparando o aluno para desafios acadêmicos internacionais e processos seletivos.",
  },
];

export function ServicosGrid() {
  return (
    <div className="services-grid">
      {services.map((service, index) => (
        <ServicoCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}
