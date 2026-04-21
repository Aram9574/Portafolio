import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'

const BASE = 'https://alejandrozakzuk.com'

export const metadata: Metadata = {
  title: 'MD + 2 MSc + Stanford AI · Clinical AI Consultant · Madrid',
  description:
    '6 years of clinical practice, dual MSc in AI for Healthcare and Digital Health, plus Stanford AI in Healthcare. Advisor on EU AI Act, MDR and SaMD.',
  alternates: {
    canonical: `${BASE}/en`,
    languages: {
      'es-ES': BASE,
      en: `${BASE}/en`,
      'x-default': BASE,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${BASE}/en`,
    siteName: 'Aram Zakzuk, MD · Healthcare & Clinical AI Consultant',
    title: 'Aram Zakzuk, MD · Healthcare & Clinical AI Consultant',
    description:
      'Medical doctor + dual master in AI applied to Healthcare and Digital Health. Advisory for healthcare organizations, consulting firms and HealthTech companies on Clinical AI, EU AI Act, MDR and SaMD.',
  },
}

const enSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${BASE}/en#aboutpage`,
      url: `${BASE}/en`,
      name: 'About Aram Zakzuk, MD — Healthcare & Clinical AI Consultant',
      about: { '@id': `${BASE}/#person` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      '@id': `${BASE}/en#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who is Aram Zakzuk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Aram Zakzuk is a medical doctor (MD, Universidad del Rosario) based in Madrid, Spain, working as a Healthcare & Clinical AI Consultant. He holds a Master in AI applied to Healthcare (CEMP), a Master in Digital Health / eHealth (Universidad Europea) and an AI in Healthcare Specialization from Stanford University.',
          },
        },
        {
          '@type': 'Question',
          name: 'What services does he offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clinical AI evaluation and adoption strategy, EU regulatory advisory (EU AI Act, MDR, SaMD), clinical viability assessment of CDSS, Healthcare Data Analytics and interoperability (HL7 FHIR, SNOMED-CT, EHDS), and clinical–technical translation in digital transformation projects for HealthTech and MedTech.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is he a software developer or a data scientist?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Aram Zakzuk is a consultant. His technical capacity in Machine Learning, XAI/SHAP and EU AI Act underpins his consulting judgment, it is not the service he offers. Personal technical projects (diabetes CDSS with AUC-ROC 0.942, ClinAI Classifier, CDC BRFSS analysis) are credential, not product.',
          },
        },
      ],
    },
  ],
}

export default function AboutEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enSchema) }}
      />

      {/* HERO */}
      <Section id="en-hero" className="pt-24">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">About · English</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h1 className="display-xl mb-6">
              Aram Zakzuk, MD.
              <br />
              <span className="italic">Healthcare &amp; Clinical AI Consultant.</span>
            </h1>
            <p className="lead max-w-3xl">
              Medical doctor with 6 years of real clinical practice and dual master in AI applied to Healthcare
              and Digital Health. The profile healthcare organizations and consulting firms look for when they
              need someone who understands the problem before proposing a solution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contacto?audience=healthtech" className="btn-ink">
                Book a 15-min call →
              </Link>
              <a
                href="https://linkedin.com/in/aramzakzuk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                LinkedIn profile
              </a>
            </div>
            <p className="caption mt-6">
              Also available in{' '}
              <Link href="/" className="ed-link">
                Spanish (primary)
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>

      {/* WHAT I OFFER */}
      <Section id="en-offer" index="01 / What I offer">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">What I offer</h2>
            <div className="caption mt-4">Clinical judgment + European regulation</div>
          </div>
          <div className="col-span-12 md:col-span-9 text-ink-2 space-y-6">
            <p>
              Real clinical judgment to evaluate, challenge and implement AI solutions in healthcare. The
              ability to sit with an engineering team and understand what they build. The ability to sit with
              a medical committee and explain why it doesn&apos;t work. And knowledge of the European
              regulatory framework so that decisions are sustainable.
            </p>
            <p>
              I&apos;m not a developer nor a data scientist. Technical capacity is the credential that
              underpins my consulting judgment — not the service I sell.
            </p>
          </div>
        </div>
      </Section>

      {/* WHERE I ADD VALUE */}
      <Section id="en-value" index="02 / Where I add value">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <h2 className="display-m">Where I add value</h2>
            <div className="caption mt-4">Four axes</div>
          </div>
          <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">01</div>
              <h3 className="font-display text-xl text-ink mb-2">Clinical AI evaluation &amp; adoption strategy</h3>
              <p className="text-ink-2 text-sm leading-relaxed">
                Auditing clinical AI solutions, assessing workflow fit and designing adoption strategy in real
                hospital environments.
              </p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">02</div>
              <h3 className="font-display text-xl text-ink mb-2">EU regulatory advisory — AI Act · MDR · SaMD</h3>
              <p className="text-ink-2 text-sm leading-relaxed">
                Classification under Regulation 2024/1689, conformity analysis and compliance roadmap for
                HealthTech and MedTech projects.
              </p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">03</div>
              <h3 className="font-display text-xl text-ink mb-2">Clinical viability of CDSS, data &amp; interoperability</h3>
              <p className="text-ink-2 text-sm leading-relaxed">
                Clinical assessment of Clinical Decision Support Systems, Healthcare Data Analytics and
                healthcare interoperability (HL7 FHIR · SNOMED-CT · EHDS).
              </p>
            </div>
            <div className="border-t border-ink pt-5">
              <div className="eyebrow mb-3">04</div>
              <h3 className="font-display text-xl text-ink mb-2">Clinical–technical translation</h3>
              <p className="text-ink-2 text-sm leading-relaxed">
                Bridge between medical committees, engineering teams and public procurement in healthcare
                digital transformation projects.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTORS */}
      <Section id="en-sectors">
        <div className="border-t border-rule pt-6 flex flex-wrap items-start gap-y-4 gap-x-6">
          <div className="eyebrow shrink-0">Sectors</div>
          <div className="flex flex-wrap gap-2">
            {[
              'HealthTech',
              'MedTech',
              'Life Sciences',
              'Digital Health',
              'Pharmaceutical Industry',
              'Medical Device',
            ].map((s) => (
              <span key={s} className="chip-ed">
                {s}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="en-cta" className="rule-b">
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow">Next step</div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="display-l">
              Looking for clinical judgment in your AI project?
            </h2>
            <p className="lead mt-6">
              I advise healthcare organizations, consulting firms (Crowe, Deloitte, Accenture, Minsait) and
              HealthTech / MedTech / Life Sciences companies in Madrid and across Europe. The first 15-minute
              conversation is free — we validate fit and agree next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://calendly.com/zakzukaram"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink"
              >
                Book on Calendly →
              </a>
              <a href="mailto:zakzukaram@gmail.com" className="btn-ghost">
                zakzukaram@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
