import Link from "next/link";
import { C, sans, serif } from "./constants";
import { Arr, Chk, Section, Tag } from "./Primitives";
import ScrollReveal from "./ScrollReveal";

export default function ReferenceHowItWorks() {
  return (
    <main>
      <Section>
        <ScrollReveal style={{ maxWidth: "620px", marginBottom: "52px" }}>
          <Tag>Our Process</Tag>
          <h2 style={{ fontFamily: serif, fontSize: "2.2rem", color: C.deep, marginBottom: "14px" }}>Simple. Straightforward. Up and Running in Weeks.</h2>
          <p style={{ fontFamily: sans, fontSize: "0.95rem", color: C.textMid, lineHeight: 1.8 }}>Most practices are live with their first team member within 2–4 weeks. Here&apos;s exactly what happens.</p>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { n: "01", t: "Talk to Ger", time: "Day 1", desc: "A straight conversation about your practice — what you need, how you work, what software you use (Xero, Sage, QuickBooks, TaxCalc), and what experience level makes sense. Free, no obligation, no sales pitch.", items: ["Understand your practice and workflow", "Agree the type of candidate you need", "Get honest advice on fit and cost"] },
            { n: "02", t: "Ger Finds and Vets the Candidates", time: "Week 1–2", desc: "Ger personally interviews every candidate against the brief you've given him. Only the people he would hire himself are put in front of you. You'll receive full profiles with qualifications, experience, and a suggested salary.", items: ["Ger interviews every candidate personally", "Qualifications verified (CA, ACCA, CPA, B.Com)", "English fluency and software skills assessed"] },
            { n: "03", t: "You Interview and Decide", time: "Week 2–3", desc: "You interview your shortlist by video call — just like any hire. There's no obligation. You choose who joins your team, or you don't. Simple.", items: ["Video interviews at your convenience", "Detailed profiles provided in advance", "You make the final call — always"] },
            { n: "04", t: "We Set Everything Up", time: "Week 3–4", desc: "We handle the contract, set up their dedicated desk in our Zirakpur office, provide all equipment, and get them onto your systems. You just introduce them to your team.", items: ["Employment contract under Indian law", "Desk, equipment and internet provided", "Ready to work on your systems from day one"] },
            { n: "05", t: "They Work. We Manage the Rest.", time: "Ongoing", desc: "Your new team member works the hours you agree. You manage the day-to-day work directly. We handle everything else — payroll, HR, compliance, facilities — and send you one invoice a month in Euros.", items: ["You set the hours and work directly with them", "We handle payroll, HR and compliance", "180-day free replacement guarantee"] },
          ].map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="step-card how-grid" style={{ padding: "32px 36px" }}>
                <div>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: C.cyan, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sans, fontSize: "0.85rem", fontWeight: 900, color: C.deep }}>{s.n}</div>
                  <div style={{ fontFamily: sans, fontSize: "0.68rem", color: C.textLight, fontWeight: 700, marginTop: "6px", textAlign: "center" }}>{s.time}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: sans, fontSize: "1.05rem", fontWeight: 800, color: C.deep, marginBottom: "8px" }}>{s.t}</h3>
                  <p style={{ fontFamily: sans, fontSize: "0.85rem", color: C.textMid, lineHeight: 1.8 }}>{s.desc}</p>
                </div>
                <div style={{ background: C.cream, borderRadius: "8px", padding: "18px" }}>
                  {s.items.map((d, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "center" }}>
                      <Chk />
                      <span style={{ fontFamily: sans, fontSize: "0.78rem", color: C.text }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ marginTop: "40px", background: C.cyanPale, borderRadius: "12px", padding: "36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <ScrollReveal variant="slideLeft" style={{ flex: "1 1 280px", minWidth: 0 }}>
            <div>
              <h3 style={{ fontFamily: sans, fontSize: "1.05rem", fontWeight: 800, color: C.deep, marginBottom: "4px" }}>Have a question before you&apos;re ready to call?</h3>
              <p style={{ fontFamily: sans, fontSize: "0.88rem", color: C.textMid }}>Drop us a message — Ger will come back to you personally.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideRight" delay={0.06}>
            <Link href="/contact" className="btn-primary">
              Get in Touch <Arr />
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </main>
  );
}
