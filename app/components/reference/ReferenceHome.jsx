import Link from "next/link";
import { C, sans, serif } from "./constants";
import { Arr, Chk, Section, Tag } from "./Primitives";
import ReferenceHero from "./ReferenceHero";
import ScrollReveal from "./ScrollReveal";

export default function ReferenceHome() {
  return (
    <>
      <header>
        <ReferenceHero />
      </header>

      <main>
        <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, padding: "20px 48px" }}>
          <ScrollReveal className="trust-bar" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
            {["Every Candidate Interviewed by Ger Feehily ACA", "Employer of Record — No Irish Tax Issues", "Staff Work on Your Own Systems — GDPR Safe", "180-Day Free Replacement Guarantee"].map((t, i) => (
              <div key={i} className="trust-item">
                <Chk />
                <span style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 600, color: C.textMid, whiteSpace: "nowrap" }}>{t}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>

        <Section bg={C.white}>
          <div className="two-col">
            <ScrollReveal variant="slideLeft">
              <div>
                <Tag>Sound Familiar?</Tag>
                <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep, marginBottom: "16px" }}>Hiring Locally Is Getting Harder Every Year</h2>
                <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.textMid, lineHeight: 1.85, marginBottom: "22px" }}>
                  A local accountant costs €40,000+ before you add PRSI, pension, office space and the months of training before they&apos;re any use to you.
                </p>
                {["Candidates demanding salaries your fees can't support", "Six months before a new hire is genuinely productive", "January and October crunch with not enough hands", "Your best people stuck doing compliance work instead of growing the practice"].map((p, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.amber, flexShrink: 0, marginTop: "8px" }} />
                    <span style={{ fontFamily: sans, fontSize: "0.85rem", color: C.textMid, lineHeight: 1.7 }}>{p}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal variant="slideRight" delay={0.06}>
              <div>
                <Tag>Here&apos;s What We Do</Tag>
                <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep, marginBottom: "16px" }}>I&apos;ve Been Doing This in My Own Practice for Years</h2>
                <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.textMid, lineHeight: 1.85, marginBottom: "22px" }}>
                  Ger Feehily ACA has run his Dublin practice since 1990. Today he manages 10 Indian staff through the exact same model he&apos;s now offering you. This isn&apos;t theory — it&apos;s a proven system.
                </p>
                {[
                  { t: "Every Candidate Vetted by a Fellow Practitioner", d: "Ger personally interviews every candidate before they're presented to you. He knows what a good accountant looks like — because he's hired hundreds of them." },
                  { t: "We Handle Everything Behind the Scenes", d: "We're the legal employer in India. Payroll, tax, HR, office, equipment — all covered. You get one clean monthly invoice in Euros." },
                  { t: "No Irish Tax Issues", d: "The supply is business-to-business outside the EU — no Irish VAT. And because we're the Employer of Record, there's no Irish employment tax liability on your side." },
                ].map((v, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "18px" }}>
                    <Chk />
                    <div>
                      <div style={{ fontFamily: sans, fontSize: "0.88rem", fontWeight: 700, color: C.deep, marginBottom: "2px" }}>{v.t}</div>
                      <div style={{ fontFamily: sans, fontSize: "0.82rem", color: C.textMid, lineHeight: 1.7 }}>{v.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </Section>

        <Section bg={C.cream}>
          <ScrollReveal style={{ textAlign: "center", maxWidth: "580px", margin: "0 auto 48px" }}>
            <Tag>What You Get</Tag>
            <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep, marginBottom: "14px" }}>We Handle Everything — You Just Do the Work</h2>
            <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.textMid, lineHeight: 1.8 }}>As your Employer of Record, we deal with every operational headache so you never have to think about it.</p>
          </ScrollReveal>
          <div className="three-col">
            {[
              { title: "Candidate Vetting", icon: "👥", items: ["Ger personally interviews every candidate", "Technical & English assessment", "You interview before any commitment"] },
              { title: "Employment & Compliance", icon: "📋", items: ["We're the legal employer in India", "Payroll, tax & provident fund managed", "No Irish employment tax liability"] },
              { title: "Office & Equipment", icon: "🏢", items: ["Dedicated desk in our Zirakpur office", "Equipment, internet & power backup", "Irish management on-site daily"] },
              { title: "GDPR & Data Security", icon: "🔒", items: ["Staff work on your own systems", "No client data stored by us", "Confidentiality agreements in place"] },
              { title: "Onboarding", icon: "🚀", items: ["Software access & setup handled", "Introduced to your team properly", "Productive within days, not months"] },
              { title: "Ongoing Support", icon: "🛡️", items: ["Single monthly invoice in Euros", "180-day free replacement guarantee", "Dedicated account management"] },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "28px 24px", height: "100%" }} className="card-hover">
                  <div style={{ fontSize: "1.4rem", marginBottom: "12px" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: sans, fontSize: "0.92rem", fontWeight: 800, color: C.deep, marginBottom: "14px" }}>{s.title}</h3>
                  {s.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "center" }}>
                      <Chk />
                      <span style={{ fontFamily: sans, fontSize: "0.8rem", color: C.textMid }}>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section bg={C.white}>
          <ScrollReveal style={{ textAlign: "center", maxWidth: "560px", margin: "0 auto 44px" }}>
            <Tag>Roles We Fill</Tag>
            <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep }}>The Work They Can Do From Day One</h2>
          </ScrollReveal>
          <div className="three-col">
            {[
              { title: "Accounts Preparation", desc: "Year-end accounts, management accounts, and financial statements for sole traders, partnerships, and companies." },
              { title: "Bookkeeping", desc: "Transaction processing, bank reconciliations, VAT returns, and purchase/sales ledger management." },
              { title: "Tax Compliance", desc: "Personal tax (Form 11), corporation tax (CT1), income tax computations, and CGT/CAT calculations." },
              { title: "Payroll Processing", desc: "Weekly and monthly payroll, PAYE/PRSI, payslips, Revenue submissions, and year-end returns." },
              { title: "Audit Support", desc: "Audit file preparation, substantive testing, analytical review, and working paper documentation." },
              { title: "Practice Administration", desc: "Client communication, document management, deadline tracking, and billing support." },
            ].map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="role-card" style={{ height: "100%" }}>
                  <h3 style={{ fontFamily: sans, fontSize: "0.95rem", fontWeight: 700, color: C.deep, marginBottom: "8px" }}>{r.title}</h3>
                  <p style={{ fontFamily: sans, fontSize: "0.82rem", color: C.textMid, lineHeight: 1.75 }}>{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>

        <Section bg={C.cream}>
          <ScrollReveal style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto 44px" }}>
            <Tag>Client Testimonial</Tag>
            <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep }}>A Fellow Practice Owner&apos;s Experience</h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className="reference-testimonial-card">
              <div className="reference-testimonial-quote" aria-hidden>
                &ldquo;
              </div>

              <div className="testimonial-split">
                <ScrollReveal variant="slideLeft">
                  <div>
                    <p style={{ fontFamily: sans, fontSize: "0.9rem", color: C.textMid, lineHeight: 1.9, marginBottom: "14px" }}>
                      I was sceptical at first — like most practice owners, I had questions about quality, GDPR, and whether it would actually work in practice. Anamrina took the time to understand exactly what we needed and what our clients expect.
                    </p>
                    <p style={{ fontFamily: sans, fontSize: "0.9rem", color: C.textMid, lineHeight: 1.9, marginBottom: "14px" }}>
                      The auditor they placed with us has been outstanding — technically strong, proactive, and a genuinely easy person to work with. They integrated into our team quickly and have added real capacity to the practice.
                    </p>
                    <p style={{ fontFamily: sans, fontSize: "0.9rem", color: C.deep, lineHeight: 1.9, fontWeight: 600 }}>
                      If you&apos;re thinking about offshoring but have concerns, talk to Anamrina. What felt like a daunting step turned out to be one of the best decisions I&apos;ve made for the practice.
                    </p>
                  </div>
                </ScrollReveal>
                <ScrollReveal variant="slideRight" delay={0.08}>
                  <div style={{ textAlign: "center", paddingTop: "10px" }}>
                    <div
                      style={{
                        width: "76px",
                        height: "76px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${C.navy}, ${C.slate})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: serif,
                        fontSize: "1.5rem",
                        color: "#fff",
                        margin: "0 auto 12px",
                        border: `3px solid ${C.cyan}`,
                      }}
                    >
                      BD
                    </div>
                    <div style={{ fontFamily: sans, fontSize: "0.92rem", fontWeight: 800, color: C.deep }}>Barry Dolan</div>
                    <div style={{ fontFamily: sans, fontSize: "0.76rem", fontWeight: 700, color: C.cyan }}>FCCA</div>
                    <div style={{ fontFamily: sans, fontSize: "0.76rem", color: C.textLight, marginTop: "2px" }}>Barry Dolan & Co</div>
                    <div style={{ fontFamily: sans, fontSize: "0.68rem", color: C.textLight }}>Dublin, Ireland</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </Section>

        <div style={{ background: `linear-gradient(135deg, ${C.deep}, ${C.navyMid})`, padding: "80px 48px", textAlign: "center", position: "relative", overflow: "hidden" }} className="section-pad">
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,216,0.06), transparent 65%)", pointerEvents: "none" }} />
          <ScrollReveal style={{ position: "relative" }}>
            <h2 style={{ fontFamily: serif, fontSize: "2.3rem", color: "#fff", marginBottom: "14px" }}>Let&apos;s Have a Straight Conversation About Your Practice</h2>
            <p style={{ fontFamily: sans, fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", marginBottom: "32px" }}>No sales pitch. Ger will tell you honestly whether this model works for your situation — and what it would actually cost you.</p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "0.9rem", padding: "16px 36px" }}>
              Talk to Ger <Arr />
            </Link>
          </ScrollReveal>
        </div>
      </main>
    </>
  );
}
