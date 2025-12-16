import "./footerStyle.css";

export function Footer() {
  return (
    <footer
      className="footer"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      <div className="footer-content">
        {/* MARCA */}
        <div className="footer-brand">
          <img
            src="/LogoHeroAprimorar.png"
            alt="Aprimorar Espaço Multidisciplinar de Aprendizagem"
            loading="lazy"
          />
        </div>

        {/* CONTATO / NAP */}
        <address className="footer-address">
          <p
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            SEPS Q 712/912 - Clube dos Previdenciários - Asa Sul, Brasília - DF,
            70390-125
          </p>

          <p>
            <a href="tel:+556199883-3766" itemProp="telephone">
              (61)99883-3766
            </a>
          </p>

          <p>
            <a href="mailto:contato@aprimorar.com.br" itemProp="email">
              aprimorarsoftware@gmail.com
            </a>
          </p>
        </address>

        {/* NAVEGAÇÃO */}
        <nav className="footer-nav" aria-label="Links do rodapé">
          <a href="#about">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#contato">Contato</a>
        </nav>

        {/* SOCIAL */}
        <div className="footer-social">
          <a
            href="https://instagram.com/aprimorar_cursos10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram do Aprimorar"
          >
            Instagram
          </a>
          
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Aprimorar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
