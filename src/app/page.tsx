import Image from "next/image";
import { ArrowDown, Check, X } from "lucide-react";
import { FaqList } from "@/components/FaqList";
import { FlowCanvas } from "@/components/FlowCanvas";
import { ProofGallery } from "@/components/ProofGallery";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedWhatsAppLink } from "@/components/TrackedWhatsAppLink";
import { audience, content, timeline } from "@/data/content";
import antonyJourney from "../../public/images/story/antony-jornada.jpg";

const candleHeights = [
  34, 48, 41, 63, 57, 76, 69, 88, 71, 66, 82, 96, 79, 105, 91, 118, 110,
  126, 117, 138, 129, 151,
];

export default function Home() {
  const partnershipDisclosure =
    process.env.NEXT_PUBLIC_PARTNERSHIP_DISCLOSURE?.trim();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "O Fluxo Certo",
    description:
      "Apresentação do método de leitura de fluxo e execução automatizada desenvolvido por Antony.",
    inLanguage: "pt-BR",
    ...(siteUrl ? { url: siteUrl } : {}),
    creator: {
      "@type": "Person",
      name: "Antony",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <FlowCanvas />
          <div className="hero-image" aria-hidden="true">
            <Image
              src="/images/hero/antony-fluxo-certo.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
            />
          </div>
          <div className="hero-vignette" aria-hidden="true" />

          <div className="hero-content">
            <h1 id="hero-title">
              <span>{content.hero.titleLead}</span>
              <strong>{content.hero.titleSignal}</strong>
            </h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-action">
              <TrackedWhatsAppLink location="hero" className="primary-cta">
                {content.cta}
              </TrackedWhatsAppLink>
              <p>{content.ctaMicrocopy}</p>
            </div>
            <ul className="hero-trust" aria-label="Pontos centrais da apresentação">
              {content.hero.trust.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-instrument" aria-hidden="true">
            <span>Entrada</span>
            <strong>Fluxo detectado</strong>
            <div className="instrument-line">
              <i />
            </div>
            <small>Leitura → regra → risco → execução</small>
          </div>

          <a className="scroll-cue" href="#decisao">
            <span>Entenda o mecanismo</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <div className="signal-marquee" aria-label="Contexto da apresentação">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <span key={group} aria-hidden={group === 1}>
                O FLUXO CERTO <i /> APRESENTAÇÃO <i /> EXECUÇÃO SISTEMÁTICA <i />
                LEITURA DE FLUXO <i /> RISCO COMO REGRA <i />
              </span>
            ))}
          </div>
        </div>

        <section className="tension-section section-shell" id="decisao">
          <div className="tension-copy" data-reveal>
            <h2>{content.tension.title}</h2>
            <p>{content.tension.intro}</p>
          </div>

          <div className="decision-field" data-reveal>
            <div className="decision-side emotional-side">
              <span>Decisão emocional</span>
              <ul>
                {content.tension.emotional.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <svg viewBox="0 0 420 180" aria-hidden="true">
                <path d="M10 122C65 27 101 167 151 85S241 163 278 70 350 126 410 38" />
                <path d="M10 86C88 155 103 30 182 112S304 52 410 103" />
                <path d="M10 140C116 120 143 151 206 45S335 144 410 82" />
              </svg>
            </div>

            <div className="decision-axis" aria-hidden="true">
              <span>entre o sinal e o clique</span>
            </div>

            <div className="decision-side systematic-side">
              <span>Execução sistemática</span>
              <ul>
                {content.tension.systematic.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <svg viewBox="0 0 420 180" aria-hidden="true">
                <path d="M10 140C92 140 92 117 172 117S252 83 330 83 378 45 410 45" />
                <circle cx="10" cy="140" r="5" />
                <circle cx="172" cy="117" r="5" />
                <circle cx="330" cy="83" r="5" />
                <circle cx="410" cy="45" r="5" />
              </svg>
            </div>
          </div>
        </section>

        <section className="trace-section">
          <div className="trace-copy" data-reveal>
            <h2>{content.trace.title}</h2>
            <p>{content.trace.description}</p>
          </div>

          <div className="trace-visual" aria-hidden="true" data-reveal>
            <div className="trace-candles">
              {candleHeights.map((height, index) => (
                <i
                  key={`${height}-${index}`}
                  style={{
                    height: `${height}px`,
                    transform: `translateY(${index % 2 === 0 ? 12 : -5}px)`,
                  }}
                />
              ))}
            </div>
            <svg viewBox="0 0 1200 340" preserveAspectRatio="none">
              <path
                className="trace-ghost"
                d="M0 250C90 164 141 279 228 201S378 245 462 155 622 194 699 118 850 159 936 88 1088 119 1200 31"
              />
              <path
                className="trace-live"
                d="M0 250C90 164 141 279 228 201S378 245 462 155 622 194 699 118 850 159 936 88 1088 119 1200 31"
              />
            </svg>
            <div className="trace-readout">
              <span>Rastro</span>
              <strong>força em deslocamento</strong>
            </div>
          </div>
        </section>

        <section
          className="proof-section"
          id="registros"
          data-track-view="proof_section_view"
        >
          <div className="proof-heading section-shell" data-reveal>
            <h2>{content.proof.title}</h2>
            <p>{content.proof.intro}</p>
          </div>
          <ProofGallery />
          <div className="proof-disclaimer section-shell">
            <p>{content.disclaimer}</p>
            <TrackedWhatsAppLink location="proof" className="text-cta">
              Quero ver a lógica na apresentação
            </TrackedWhatsAppLink>
          </div>
        </section>

        <section className="automation-section section-shell">
          <div className="automation-copy" data-reveal>
            <h2>{content.automation.title}</h2>
            <p>{content.automation.description}</p>
          </div>

          <div
            className="decision-pipeline"
            role="img"
            aria-label="Fluxo do mercado para leitura, regras, risco e execução"
            data-reveal
          >
            {content.automation.steps.map((step, index) => (
              <div className="pipeline-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
                {index < content.automation.steps.length - 1 ? (
                  <i aria-hidden="true" />
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section className="risk-section">
          <div className="risk-inner section-shell">
            <div className="risk-copy" data-reveal>
              <h2>{content.risk.title}</h2>
              <p>{content.risk.description}</p>
            </div>
            <div className="risk-calibrator" data-reveal>
              <div className="risk-scale" aria-hidden="true">
                <span />
                <i />
              </div>
              <ol>
                {content.risk.labels.map((label, index) => (
                  <li key={label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{label}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="story-section section-shell">
          <div className="story-image" data-reveal>
            <Image
              src={antonyJourney}
              alt="Antony diante de uma paisagem de montanhas durante sua jornada pessoal"
              sizes="(max-width: 768px) 100vw, 44vw"
            />
            <div className="story-image-caption">
              <span>Antony</span>
              <small>Estudando e operando desde 2019</small>
            </div>
          </div>

          <div className="story-content">
            <div className="story-heading" data-reveal>
              <h2>{content.story.title}</h2>
              <p>{content.story.description}</p>
            </div>
            <ol className="timeline">
              {timeline.map((item) => (
                <li key={item.marker} data-reveal>
                  <span>{item.marker}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="audience-section section-shell">
          <div className="audience-column audience-yes" data-reveal>
            <h2>É para você que…</h2>
            <ul>
              {audience.forYou.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="audience-column audience-no" data-reveal>
            <h2>Não é para quem…</h2>
            <ul>
              {audience.notForYou.map((item) => (
                <li key={item}>
                  <X aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="class-section">
          <div className="class-grid section-shell">
            <div className="class-copy" data-reveal>
              <h2>{content.classSection.title}</h2>
              <TrackedWhatsAppLink
                location="class_section"
                className="primary-cta"
              >
                Quero ver funcionando
              </TrackedWhatsAppLink>
            </div>
            <ul className="class-agenda" data-reveal>
              {content.classSection.bullets.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="faq-section section-shell">
          <div className="faq-heading" data-reveal>
            <h2>Perguntas que precisam de resposta antes de qualquer decisão.</h2>
            <p>
              Sem promessa escondida nas entrelinhas. O que ainda depende da apresentação,
              permanece na apresentação.
            </p>
          </div>
          <FaqList />
        </section>

        <section className="final-section">
          <div className="final-candles" aria-hidden="true">
            {candleHeights.slice(4).map((height, index) => (
              <i key={`${height}-${index}`} style={{ height: `${height * 1.5}px` }} />
            ))}
          </div>
          <div className="final-glow" aria-hidden="true" />
          <div className="final-content" data-reveal>
            <h2>
              <span>{content.final.titleLead}</span>
              <strong>{content.final.titleSignal}</strong>
            </h2>
            <TrackedWhatsAppLink location="final" className="final-cta">
              Participar da apresentação
            </TrackedWhatsAppLink>
            <p>{content.final.microcopy}</p>
          </div>
        </section>
      </main>

      <aside className="mobile-sticky-cta" aria-label="Ação principal">
        <TrackedWhatsAppLink location="sticky_mobile" className="primary-cta">
          Participar da apresentação
        </TrackedWhatsAppLink>
      </aside>

      <footer className="site-footer">
        <div>
          <a className="wordmark" href="#top" aria-label="O Fluxo Certo — início">
            <span className="wordmark-signal" aria-hidden="true" />
            <span>{content.brand}</span>
          </a>
          <p>{content.disclaimer}</p>
          {partnershipDisclosure ? <p>{partnershipDisclosure}</p> : null}
        </div>
        <span>© {new Date().getFullYear()} O Fluxo Certo. Conteúdo informativo.</span>
      </footer>
    </>
  );
}
