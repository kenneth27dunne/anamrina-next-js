import { C, sans, serif } from "./constants";
import { Section, Tag } from "./Primitives";
import ScrollReveal from "./ScrollReveal";

export default function ReferenceAbout() {
  return (
    <main>
      <Section>
        <ScrollReveal style={{ maxWidth: "700px", marginBottom: "52px" }}>
          <Tag>About Anamrina</Tag>
          <h2 style={{ fontFamily: serif, fontSize: "2.2rem", color: C.deep, marginBottom: "18px" }}>Built by a Practice Owner, for Practice Owners</h2>
          <p style={{ fontFamily: sans, fontSize: "0.95rem", color: C.textMid, lineHeight: 1.85, marginBottom: "16px" }}>
            Ger Feehily ACA has run his own Dublin accountancy practice since 1990. Over the years, like every practice owner in Ireland, he faced the same pressure: rising salary expectations, difficulty finding good staff, and margins that couldn&apos;t keep pace with the cost of hiring locally.
          </p>
          <p style={{ fontFamily: sans, fontSize: "0.95rem", color: C.textMid, lineHeight: 1.85, marginBottom: "16px" }}>
            His solution was to build a team of 10 qualified Indian accountants, managed from a dedicated office in Zirakpur, Punjab. That model transformed his practice — and Anamrina exists to give every small and mid-size Irish practice the same advantage.
          </p>
          <p style={{ fontFamily: sans, fontSize: "0.95rem", color: C.textMid, lineHeight: 1.85 }}>
            We&apos;re not a recruitment marketplace or a middleman. We&apos;re the legal employer of your staff in India, handling payroll, tax, HR, office facilities, and compliance — so you never have to. You get one clean monthly invoice in Euros and a qualified team member who&apos;s ready to work.
          </p>
        </ScrollReveal>

        <div style={{ marginBottom: "48px" }} className="three-col">
          {[
            { title: "Why India?", desc: "India produces more qualified chartered accountants each year than almost any country in the world. The talent pool is deep, English-speaking, and well-versed in international accounting standards." },
            { title: "Why Anamrina?", desc: "Because Ger uses this model in his own practice every single day. When he interviews a candidate for you, he's applying the same standards he holds his own team to. That's a level of quality assurance no agency can match." },
            { title: "What is an Employer of Record?", desc: "It means we employ your staff legally in India. Payroll, tax, pension contributions, HR — all our responsibility. You have no Indian employment obligations whatsoever. Just one monthly invoice from us." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div style={{ background: C.white, border: `1px solid ${C.border}`, borderTop: `3px solid ${C.cyan}`, borderRadius: "10px", padding: "32px 26px", height: "100%" }} className="card-hover">
                <h3 style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 800, color: C.deep, marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontFamily: sans, fontSize: "0.85rem", color: C.textMid, lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ background: C.cream, borderRadius: "16px", padding: "44px 40px", textAlign: "center", border: `1px solid ${C.border}` }} className="four-col">
          {[
            { num: "60%+", label: "Typical Cost Saving" },
            { num: "10", label: "Staff in Ger's Own Practice" },
            { num: "2–4", label: "Weeks to Placement" },
            { num: "180", label: "Day Replacement Guarantee" },
          ].map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div>
                <div className="stat-num">{s.num}</div>
                <div style={{ fontFamily: sans, fontSize: "0.7rem", color: C.textLight, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div style={{ marginTop: "72px" }}>
          <ScrollReveal style={{ marginBottom: "40px" }}>
            <Tag>Our Team</Tag>
            <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep, marginBottom: "14px" }}>Who You&apos;re Dealing With</h2>
            <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.textMid, lineHeight: 1.8, maxWidth: "600px" }}>
              A small, hands-on team — not a faceless agency. When you call Anamrina, you&apos;re talking to people who understand Irish practice life from the inside.
            </p>
          </ScrollReveal>
          <div className="three-col">
            {[
              { initials: "GF", name: "Ger Feehily ACA", role: "Founder", location: "🇮🇪 Dublin / 🇮🇳 India", desc: "Ger has run his own Dublin accountancy practice since 1990 and currently manages 10 Indian staff through the same model he offers you. He personally interviews every candidate before they're presented to a client." },
              { initials: "RD", name: "Robert Dunne", role: "Business Development", location: "🇮🇪 Ireland", desc: "Robert works directly with Irish practices, helping them understand the model and what it could mean for your bottom line. You'll meet him at ProfitPro, OmniPro and industry events across Ireland." },
              { initials: "SD", name: "Seerat Dhillon", role: "India Operations", location: "🇮🇳 Zirakpur, Punjab", desc: "Seerat runs the day-to-day in our Zirakpur office — recruitment, onboarding, HR, compliance and performance. She's the reason everything works as smoothly as it does." },
            ].map((m, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "32px 24px", textAlign: "center", height: "100%" }} className="card-hover">
                  <div style={{ width: "68px", height: "68px", borderRadius: "50%", background: `linear-gradient(135deg, ${C.navy}, ${C.slate})`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: serif, fontSize: "1.3rem", color: "#fff", margin: "0 auto 16px", border: `3px solid ${C.cyan}` }}>{m.initials}</div>
                  <div style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 800, color: C.deep, marginBottom: "2px" }}>{m.name}</div>
                  <div style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 700, color: C.cyan, marginBottom: "4px" }}>{m.role}</div>
                  <div style={{ fontFamily: sans, fontSize: "0.7rem", color: C.textLight, marginBottom: "14px" }}>{m.location}</div>
                  <p style={{ fontFamily: sans, fontSize: "0.8rem", color: C.textMid, lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal style={{ marginTop: "28px", background: C.cyanPale, borderRadius: "12px", padding: "24px 32px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ fontSize: "1.2rem" }}>📍</div>
            <p style={{ fontFamily: sans, fontSize: "0.85rem", color: C.text, lineHeight: 1.7 }}>
              <strong>You&apos;ll find us at ProfitPro Live, the Irish Accounting & Tax Summit, OmniPro Roadshow and CPD Fest 2026.</strong> Come and talk to Robert — no pressure, just an honest conversation about whether this works for your practice.
            </p>
          </ScrollReveal>
        </div>
      </Section>
    </main>
  );
}
