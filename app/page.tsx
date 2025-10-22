
"use client";

import { useMemo, useState } from "react";
import "@/styles/globals.css";
import {
  ArrowRight, BadgeCheck, Building2, Check, FileCheck2, Globe2, GraduationCap,
  LayoutDashboard, Lightbulb, Lock, Mail, PhoneCall, Rocket, ShieldCheck, Sparkles,
  Timer, Users2, Workflow, Languages
} from "lucide-react";

const dict = {
  de: {
    nav: { solutions: "Lösungen", process: "Ablauf", about: "Über mich", faq: "FAQ", contact: "Kontakt" },
    hero: {
      kicker: "E‑Learning Consulting für Unternehmen",
      h1: "Ihre Compliance & Leadership Academy – schlüsselfertig",
      sub: "Ich konzipiere und baue Ihre digitale Lernakademie: Compliance, Führung & Onboarding – skalierbar, messbar, audit‑sicher.",
      ctaPrimary: "Beratungsgespräch buchen",
      ctaSecondary: "Infos anfordern",
    },
    trust: ["DSGVO‑konform", "SCORM/xAPI", "Single Sign‑On", "Zertifikate & Reporting"],
    value: {
      title: "Warum jetzt digital schulen?",
      points: [
        { title: "Compliance sicher erfüllen", desc: "Pflichtschulungen mit Prüfungen & Zertifikaten – revisionsfähig.", icon: "Lock" },
        { title: "Zeit im Onboarding sparen", desc: "Standardwissen als Microlearning – schnell produktiv.", icon: "Timer" },
        { title: "Transparenz & Reporting", desc: "Fortschritte, Quoten, Erinnerungen – alles im Blick.", icon: "LayoutDashboard" },
      ],
    },
    solutions: {
      title: "Lösungen",
      items: [
        { title: "Compliance Academy", desc: "Datenschutz, IT‑Sicherheit, Arbeitssicherheit – modular, audit‑fest.", icon: "ShieldCheck" },
        { title: "Leadership Kurse", desc: "Führen, Feedback, Konfliktmanagement – praxisnah & interaktiv.", icon: "GraduationCap" },
        { title: "Onboarding Pfade", desc: "Kultur, Prozesse, Tools – 30/60/90‑Tage‑Guides.", icon: "Users2" },
        { title: "LMS Setup", desc: "Moodle/TalentLMS/Docebo – SSO, Rollen, Zertifikate, Automationen.", icon: "Workflow" },
      ],
    },
    process: {
      title: "So arbeiten wir zusammen",
      steps: [
        { step: "01", title: "Scoping‑Call (30–45 Min)", desc: "Ziele, Zielgruppen, Regulatorik & Quick‑Wins klären." },
        { step: "02", title: "Blueprint & Demo", desc: "Lernpfade, Kurstitel, Reporting – als klickbarer Entwurf." },
        { step: "03", title: "Setup & Inhalte", desc: "LMS, Branding, Musterkurs (z. B. Datenschutz) – Go‑Live‑Pilot." },
        { step: "04", title: "Rollout & Reporting", desc: "Einladungen, Erinnerungen, Zertifikate – laufende Optimierung." },
      ],
      cta: "Kostenlosen Scoping‑Call buchen",
    },
    socialProof: {
      title: "Für Mittelstand & wachstumsstarke Teams",
      bullets: ["100–5.000 Mitarbeitende", "Mehrstandorte/Remote", "Deutsch & Englisch"],
      note: "Referenzen auf Anfrage – Musterkurs live im Call",
    },
    about: {
      title: "Über mich",
      body: "Ich helfe Unternehmen, Lernen effizient, messbar und audit‑sicher zu machen. Technisch versiert, didaktisch fundiert, pragmatisch in der Umsetzung.",
      tags: ["Didaktikdesign", "SCORM/xAPI", "SSO & Rollen", "Change Enablement"],
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        { q: "Haben Sie fertige Kurse?", a: "Ich liefere schnell ein Demo‑Modul (z. B. Datenschutz) und entwickle Inhalte passgenau zu Ihren Richtlinien." },
        { q: "Welche Plattform nutzen Sie?", a: "Ich arbeite mit Ihrem bestehenden LMS oder setze eine passende Lösung (z. B. Moodle, TalentLMS, Docebo) auf." },
        { q: "Wie schnell sind wir live?", a: "Erste Pilotkurse meist in 3–5 Wochen – abhängig von Umfang & Freigaben." },
      ],
    },
    contact: {
      title: "Kontakt & Gespräch buchen",
      sub: "Kurzer Termin, klare Roadmap.",
      name: "Ihr Name",
      email: "E‑Mail",
      message: "Nachricht (optional)",
      submit: "Absenden",
      secure: "DSGVO‑konform – wir nutzen Ihre Daten nur zur Kontaktaufnahme.",
    },
    footer: { rights: `© ${new Date().getFullYear()} – E‑Learning Consulting`, imprint: "Impressum", privacy: "Datenschutz" },
  },
  en: {
    nav: { solutions: "Solutions", process: "Process", about: "About", faq: "FAQ", contact: "Contact" },
    hero: {
      kicker: "E‑Learning Consulting for Companies",
      h1: "Your Compliance & Leadership Academy – end‑to‑end",
      sub: "I design and build your digital learning academy: compliance, leadership & onboarding – scalable, measurable, audit‑ready.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "Request info",
    },
    trust: ["GDPR‑ready", "SCORM/xAPI", "Single Sign‑On", "Certificates & Reporting"],
    value: {
      title: "Why train digitally now?",
      points: [
        { title: "Meet compliance reliably", desc: "Mandatory trainings with tests & certificates – audit‑proof.", icon: "Lock" },
        { title: "Save onboarding time", desc: "Core knowledge via microlearning – faster to productivity.", icon: "Timer" },
        { title: "Transparency & reporting", desc: "Progress, completion rates, reminders – all in one view.", icon: "LayoutDashboard" },
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        { title: "Compliance Academy", desc: "Data privacy, IT security, occupational safety – modular, audit‑ready.", icon: "ShieldCheck" },
        { title: "Leadership Courses", desc: "Leadership, feedback, conflict management – practical & interactive.", icon: "GraduationCap" },
        { title: "Onboarding Paths", desc: "Culture, processes, tools – 30/60/90‑day guides.", icon: "Users2" },
        { title: "LMS Setup", desc: "Moodle/TalentLMS/Docebo – SSO, roles, certificates, automations.", icon: "Workflow" },
      ],
    },
    process: {
      title: "How we work together",
      steps: [
        { step: "01", title: "Scoping call (30–45m)", desc: "Clarify goals, audiences, regulation & quick wins." },
        { step: "02", title: "Blueprint & demo", desc: "Learning paths, course titles, reporting – clickable draft." },
        { step: "03", title: "Setup & content", desc: "LMS, branding, sample course (e.g., privacy) – pilot go‑live." },
        { step: "04", title: "Rollout & reporting", desc: "Invites, reminders, certificates – continuous optimization." },
      ],
      cta: "Book a free scoping call",
    },
    socialProof: {
      title: "For SMBs and growing teams",
      bullets: ["100–5,000 employees", "Multi‑site/remote", "German & English"],
      note: "References available on request – live sample in the call",
    },
    about: {
      title: "About me",
      body: "I help companies make learning efficient, measurable, and audit‑ready. Technically adept, didactically sound, pragmatic in delivery.",
      tags: ["Instructional design", "SCORM/xAPI", "SSO & roles", "Change enablement"],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Do you have ready‑made courses?", a: "I deliver a rapid demo module (e.g., privacy) and build content tailored to your policies." },
        { q: "Which platform do you use?", a: "I work with your LMS or set up a suitable platform (e.g., Moodle, TalentLMS, Docebo)." },
        { q: "How fast can we go live?", a: "First pilots typically within 3–5 weeks – depending on scope & approvals." },
      ],
    },
    contact: {
      title: "Contact & book a call",
      sub: "Short call, clear roadmap.",
      name: "Your name",
      email: "Email",
      message: "Message (optional)",
      submit: "Send",
      secure: "GDPR‑compliant – we use your data only to contact you.",
    },
    footer: { rights: `© ${new Date().getFullYear()} – E‑Learning Consulting`, imprint: "Imprint", privacy: "Privacy" },
  },
} as const;

const iconMap: Record<string, any> = {
  ArrowRight, BadgeCheck, Building2, Check, FileCheck2, Globe2, GraduationCap,
  LayoutDashboard, Lightbulb, Lock, Mail, PhoneCall, Rocket, ShieldCheck, Sparkles,
  Timer, Users2, Workflow, Languages
};

export default function Page() {
  const [lang, setLang] = useState<"de" | "en">("de");
  const t = useMemo(() => dict[lang], [lang]);

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6" />
            <span className="font-semibold tracking-tight">E‑Learning Consulting</span>
            <span className="ml-2 hidden sm:inline-flex text-xs px-2 py-1 bg-slate-100 rounded-full">
              <Sparkles className="w-4 h-4 mr-1 inline-block" />
              {lang === "de" ? "futuristisch & klar" : "futuristic & clean"}
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#solutions" className="hover:opacity-70">{t.nav.solutions}</a>
            <a href="#process" className="hover:opacity-70">{t.nav.process}</a>
            <a href="#about" className="hover:opacity-70">{t.nav.about}</a>
            <a href="#faq" className="hover:opacity-70">{t.nav.faq}</a>
            <a href="#contact" className="hover:opacity-70">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "de" ? "en" : "de")} className="border rounded-md px-3 py-1 text-sm">
              <Languages className="w-4 h-4 inline mr-2" /> {lang === "de" ? "EN" : "DE"}
            </button>
            <a href="#contact" className="hidden md:inline-flex border rounded-md px-3 py-1 text-sm">
              {lang === "de" ? "Jetzt sprechen" : "Talk now"}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <Globe2 className="w-4 h-4" />
              {t.hero.kicker}
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight mt-3">
              {t.hero.h1}
            </h1>
            <p className="mt-4 text-slate-600 md:text-lg">{t.hero.sub}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 rounded-md bg-black text-white text-sm flex items-center">
                <PhoneCall className="w-4 h-4 mr-2" /> {t.hero.ctaPrimary}
              </a>
              <a href="#contact" className="px-4 py-2 rounded-md border text-sm flex items-center">
                <Mail className="w-4 h-4 mr-2" /> {t.hero.ctaSecondary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.trust.map((item, i) => (
                <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-xs">{item}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-tr from-indigo-50 via-sky-50 to-emerald-50 border border-slate-200 shadow-sm p-6 overflow-hidden">
              <div className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
              <div className="grid grid-cols-3 gap-3">
                {["ShieldCheck","GraduationCap","Users2","Workflow","BadgeCheck","FileCheck2","Lightbulb","Building2","LayoutDashboard"].map((key, i) => {
                  const Icon = iconMap[key];
                  return (
                    <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="py-10" id="value">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{t.value.title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {t.value.points.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <div key={i} className="rounded-2xl border bg-white">
                  <div className="p-4 pb-2 text-base font-semibold flex items-center gap-2">
                    <Icon className="w-5 h-5" /> {p.title}
                  </div>
                  <div className="px-4 pb-4 text-slate-600">{p.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 border-t border-slate-200" id="solutions">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{t.solutions.title}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {t.solutions.items.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={i} className="rounded-2xl border bg-white">
                  <div className="p-4 pb-2 text-base font-semibold flex items-center gap-2">
                    <Icon className="w-6 h-6" /> {s.title}
                  </div>
                  <div className="px-4 pb-4 text-slate-600">{s.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12" id="process">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{t.process.title}</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {t.process.steps.map((s, i) => (
              <div key={i} className="rounded-2xl border bg-white">
                <div className="p-4 pb-2 text-base font-semibold flex items-center gap-2">
                  <span className="text-slate-400">{s.step}</span> {s.title}
                </div>
                <div className="px-4 pb-4 text-slate-600">{s.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="#contact" className="px-4 py-2 rounded-md bg-black text-white inline-flex items-center">
              <ArrowRight className="w-4 h-4 mr-2" /> {t.process.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border bg-white p-6 md:p-8">
            <div className="md:flex items-center justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{t.socialProof.title}</h3>
                <ul className="text-slate-600 grid md:grid-cols-3 gap-2 list-none pl-0">
                  {t.socialProof.bullets.map((b, i) => (
                    <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4" /> {b}</li>
                  ))}
                </ul>
                <p className="text-slate-500 text-sm mt-3">{t.socialProof.note}</p>
              </div>
              <div className="mt-6 md:mt-0">
                <a href="#contact" className="px-4 py-2 rounded-md bg-black text-white inline-flex items-center">
                  <PhoneCall className="w-4 h-4 mr-2" /> {t.hero.ctaPrimary}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12" id="about">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">{t.about.title}</h2>
              <p className="text-slate-600">{t.about.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.about.tags.map((tag, i) => (
                  <span key={i} className="rounded-full bg-slate-100 px-3 py-1 text-xs">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border bg-white">
              <div className="p-4 pb-2 text-base font-semibold flex items-center gap-2"><BadgeCheck className="w-5 h-5" /> Quick Facts</div>
              <div className="px-4 pb-4 text-slate-600 space-y-2">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> SCORM/xAPI</div>
                <div className="flex items-center gap-2"><LayoutDashboard className="w-4 h-4" /> Reporting & Zertifikate</div>
                <div className="flex items-center gap-2"><Building2 className="w-4 h-4" /> Mittelstand‑Fokus</div>
                <div className="flex items-center gap-2"><Globe2 className="w-4 h-4" /> DE/EN zweisprachig</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 border-t border-slate-200" id="faq">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-semibold mb-6">{t.faq.title}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {t.faq.items.map((f, i) => (
              <div key={i} className="rounded-2xl border bg-white">
                <div className="p-4 pb-2 text-base font-semibold">{f.q}</div>
                <div className="px-4 pb-4 text-slate-600">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-3xl border bg-white p-6 md:p-8">
            <div className="md:flex gap-8">
              <div className="md:w-1/2">
                <h2 className="text-xl md:text-2xl font-semibold">{t.contact.title}</h2>
                <p className="text-slate-600 mt-2">{t.contact.sub}</p>
                <form className="mt-6 grid gap-3" onSubmit={(e)=>{e.preventDefault(); alert(lang==='de' ? 'Danke! Ich melde mich kurzfristig.' : 'Thanks! I will get back shortly.')}}>
                  <input className="border rounded-md px-3 py-2" placeholder={t.contact.name} required />
                  <input className="border rounded-md px-3 py-2" placeholder={t.contact.email} type="email" required />
                  <textarea className="border rounded-md px-3 py-2 min-h-[120px]" placeholder={t.contact.message} />
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">{t.contact.secure}</div>
                    <button type="submit" className="px-4 py-2 rounded-md bg-black text-white">{t.contact.submit}</button>
                  </div>
                </form>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="space-y-4">
                  <div className="rounded-2xl border p-5">
                    <div className="text-sm text-slate-600">
                      <div className="font-medium mb-1">{lang==='de' ? 'Direkt buchen' : 'Book directly'}</div>
                      <p className="mb-3">{lang==='de' ? '15‑Min Scoping‑Call – Kalenderlink:' : '15‑min scoping call – calendar link:'}</p>
                      <a className="text-indigo-600 hover:underline" href="#" onClick={(e)=>{e.preventDefault(); alert(lang==='de' ? 'Füge hier deinen Calendly/Cal.com Link ein.' : 'Insert your Calendly/Cal.com link here.')}}>
                        {lang==='de' ? 'Termin buchen' : 'Book a time'}
                      </a>
                    </div>
                  </div>
                  <div className="rounded-2xl border p-5 text-slate-600 space-y-2">
                    <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> +49 ••• •••••••</div>
                    <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@yourdomain.tld</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>{t.footer.rights}</div>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" onClick={(e)=>{e.preventDefault(); alert(lang==='de' ? 'Impressum hinzufügen' : 'Add imprint page')}}>{t.footer.imprint}</a>
            <a href="#" onClick={(e)=>{e.preventDefault(); alert(lang==='de' ? 'Datenschutzseite hinzufügen' : 'Add privacy page')}}>{t.footer.privacy}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
