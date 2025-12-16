import { CtaButton } from "../../CtaButton/CtaButton";
import "./contatoStyle.css";

export function Contato() {
  return (
    <section
      id="contato"
      className="contato-section"
      aria-labelledby="contato-title"
    >
      <header className="contato-header reveal">
        <h2 id="contato-title">Onde nos Encontrar?</h2>
        <p>
          Estamos localizados na Asa Sul e prontos para te receber. Entre em
          contato ou venha nos visitar.
        </p>
      </header>

      <div className="contato-content reveal">
        {/* MAPA */}
        <a
          href="https://maps.app.goo.gl/QP26NtZ73BAv26Sy6"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-mapa"
          aria-label="Abrir localização do Aprimorar no Google Maps"
        >
          <img
            src="/mapaAprimorar.png"
            alt="Mapa com a localização do Aprimorar na Asa Sul"
            loading="lazy"
          />
        </a>

        {/* INFORMAÇÕES */}
        <address
          className="contato-info"
          itemScope
          itemType="https://schema.org/EducationalOrganization"
        >
          <p itemProp="name" className="contato-nome">
            Aprimorar - Espaço Multidisciplinar de Aprendizagem
          </p>

          <p
            itemProp="address"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            SEPS Q 712/912 - Clube dos Previdenciários - Asa Sul, Brasília - DF,
            70390-125
          </p>

          <p>
            <strong>Telefone:</strong>{" "}
            <a href="tel:+5561999999999" itemProp="telephone">
              (61) 3203-4031 
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/5561998833766"
              target="_blank"
              rel="noopener noreferrer"
            >
              (61)99883-3766
            </a>
          </p>

          <p>
            <strong>E-mail:</strong>{" "}
            <a href="mailto:contato@aprimorar.com.br" itemProp="email">
              aprimorarsoftware@gmail.com
            </a>
          </p>

          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://instagram.com/aprimorar_cursos10"
              target="_blank"
              rel="noopener noreferrer"
            >
              @aprimorar_cursos10
            </a>
          </p>

          {/* HORÁRIOS */}
          <div
            className="contato-horarios"
            itemProp="openingHoursSpecification"
            itemScope
            itemType="https://schema.org/OpeningHoursSpecification"
          >
            <p>
              <strong>Horário de Funcionamento:</strong>
            </p>
            <p itemProp="dayOfWeek">
              Segunda a Sexta:{" "}
              <time itemProp="opens" dateTime="09:30">
                09:30
              </time>{" "}
              às{" "}
              <time itemProp="closes" dateTime="19:00">
                19:00
              </time>
            </p>
            <p itemProp="dayOfWeek">
              Sábado: {" "}
              <time itemProp="opens" dateTime="08:00">
                09:00
              </time>{" "}
              às{" "}
              <time itemProp="closes" dateTime="13:00">13:00</time>
            </p>
            <p itemProp="dayOfWeek">
              Domingo: Fechado
            </p>
          </div>

          {/* CTA */}
          <div className="contato-cta">
            <CtaButton />
          </div>
        </address>
      </div>
    </section>
  );
}
