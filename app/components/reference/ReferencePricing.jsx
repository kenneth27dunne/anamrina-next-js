import Link from "next/link";
import { C, sans, serif } from "./constants";
import { Arr, Chk, Section, Tag } from "./Primitives";
import ScrollReveal from "./ScrollReveal";

export default function ReferencePricing() {
  return (
    <main>
      <Section>
        <ScrollReveal style={{ maxWidth: "660px", marginBottom: "52px" }}>
          <Tag>Pricing</Tag>
          <h2 style={{ fontFamily: serif, fontSize: "2.2rem", color: C.deep, marginBottom: "14px" }}>No Hidden Costs. No Surprises.</h2>
          <p style={{ fontFamily: sans, fontSize: "0.95rem", color: C.textMid, lineHeight: 1.8 }}>Pricing is straightforward. Every candidate comes with a suggested monthly salary based on their qualifications and experience. You see the full cost before you commit to anything.</p>
        </ScrollReveal>

        <ScrollReveal style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: "16px", padding: "40px", marginBottom: "32px" }}>
          <h3 style={{ fontFamily: sans, fontSize: "1.1rem", fontWeight: 800, color: C.deep, marginBottom: "24px" }}>Three Numbers. That&apos;s It.</h3>
          <div className="three-col">
            {[
              { num: "1", title: "Candidate Salary", desc: "Set based on each candidate's qualifications and experience. Ger will suggest a fair rate when he presents the profile — you're free to negotiate directly with the candidate." },
              { num: "2", title: "Service Fee: €300/mo", desc: "A flat monthly fee that covers everything we do: EOR services, office and equipment, Irish management oversight, HR, payroll, compliance. One number, no surprises." },
              { num: "3", title: "Placement Fee: €6,900", desc: "A one-time fee paid over 3 months (€2,300/month). Covers the full search, Ger's vetting, setup and onboarding. If it doesn't work out within 180 days, we find a replacement free of charge." },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div style={{ padding: "4px 0", borderLeft: `3px solid ${C.cyan}`, paddingLeft: "16px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                    <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: C.cyan, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: sans, fontSize: "0.75rem", fontWeight: 900, color: C.deep, flexShrink: 0 }}>{s.num}</div>
                    <span style={{ fontFamily: sans, fontSize: "0.92rem", fontWeight: 800, color: C.deep }}>{s.title}</span>
                  </div>
                  <p style={{ fontFamily: sans, fontSize: "0.82rem", color: C.textMid, lineHeight: 1.75 }}>{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h3 style={{ fontFamily: sans, fontSize: "1.1rem", fontWeight: 800, color: C.deep, marginBottom: "20px" }}>Typical Salary Ranges (Indicative)</h3>
        </ScrollReveal>
        <div style={{ marginBottom: "32px" }} className="three-col">
          {[
            { tier: "Junior", salary: "€250–€400", total: "€550–€700", profile: "B.Com graduate, 1–3 years' experience, Tally/basic Excel", roles: "Bookkeeping, data entry, bank reconciliations, basic accounts", badge: false },
            { tier: "Mid-Level", salary: "€400–€650", total: "€700–€950", profile: "M.Com / CA Inter, 3–6 years' experience, Xero/Sage/QuickBooks", roles: "Accounts preparation, tax returns, VAT, payroll, audit support", badge: true },
            { tier: "Senior / CA", salary: "€650–€1,400+", total: "€950–€1,700+", profile: "Chartered Accountant, 6–10+ years, international experience", roles: "End-to-end accounts, team leadership, complex tax, advisory support", badge: false },
          ].map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="tier-card" style={{ position: "relative", border: t.badge ? `2px solid ${C.cyan}` : `1px solid ${C.border}`, boxShadow: t.badge ? "0 8px 32px rgba(0,180,216,0.15)" : "none", height: "100%" }}>
                {t.badge && (
                  <div style={{ position: "absolute", top: "-13px", right: "16px", background: C.cyan, color: C.deep, fontFamily: sans, fontSize: "0.65rem", fontWeight: 800, padding: "4px 14px", borderRadius: "12px" }}>MOST COMMON</div>
                )}
                <div style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: C.cyan, marginBottom: "8px" }}>{t.tier}</div>
                <div style={{ fontFamily: serif, fontSize: "1.9rem", color: C.deep, marginBottom: "4px" }}>{t.salary}</div>
                <p style={{ fontFamily: sans, fontSize: "0.72rem", color: C.textLight, marginBottom: "16px" }}>candidate salary/month</p>
                <div style={{ background: C.cyanPale, borderRadius: "8px", padding: "12px", marginBottom: "16px", textAlign: "center" }}>
                  <span style={{ fontFamily: sans, fontSize: "0.72rem", color: C.textLight }}>Total with service fee:</span>
                  <div style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 800, color: C.deep }}>
                    {t.total}
                    <span style={{ fontSize: "0.72rem", fontWeight: 600, color: C.textLight }}>/mo</span>
                  </div>
                </div>
                <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: "14px" }}>
                  <div style={{ fontFamily: sans, fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: C.textLight, marginBottom: "5px" }}>Typical Profile</div>
                  <p style={{ fontFamily: sans, fontSize: "0.78rem", color: C.textMid, lineHeight: 1.6, marginBottom: "12px" }}>{t.profile}</p>
                  <div style={{ fontFamily: sans, fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: C.textLight, marginBottom: "5px" }}>Typical Roles</div>
                  <p style={{ fontFamily: sans, fontSize: "0.78rem", color: C.textMid, lineHeight: 1.6 }}>{t.roles}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal style={{ background: C.amberPale, border: "1px solid rgba(243,156,18,0.2)", borderRadius: "12px", padding: "24px 28px", marginBottom: "40px", display: "flex", gap: "14px", alignItems: "start" }}>
          <div style={{ fontSize: "1.2rem", marginTop: "2px", flexShrink: 0 }}>💡</div>
          <p style={{ fontFamily: sans, fontSize: "0.88rem", color: C.text, lineHeight: 1.7 }}>
            <strong>The more junior the hire, the bigger the saving.</strong> A junior bookkeeper on a lower salary could save your practice significantly more than 60% compared to a local hire. Ger will help you work out the right level for your needs.
          </p>
        </ScrollReveal>

        <ScrollReveal style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: "16px", padding: "40px", marginBottom: "40px" }}>
          <h3 style={{ fontFamily: sans, fontSize: "1.1rem", fontWeight: 800, color: C.deep, marginBottom: "20px" }}>Included in Every Placement</h3>
          <div className="two-col two-col-checklist">
            {["Legal employment under Indian law (EOR)", "Payroll, tax, provident fund & ESI compliance", "Dedicated desk in our managed India office", "Equipment, internet & power backup", "Irish management oversight on-site", "HR administration & leave management", "Monthly invoicing in Euros (GST-exempt)", "180-day free replacement guarantee", "60-day notice period — no long-term lock-in", "Confidentiality & GDPR undertakings"].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "8px", alignItems: "center" }}>
                <Chk />
                <span style={{ fontFamily: sans, fontSize: "0.84rem", color: C.text }}>{item}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: "14px", overflow: "hidden" }} className="comparison-table">
            <div style={{ padding: "24px 32px", background: C.deep }}>
              <h3 style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 800, color: "#fff" }}>Cost Comparison: Irish Hire vs Anamrina (Mid-Level Example)</h3>
            </div>
            <div style={{ overflowX: "auto" }}>
              {[
                { item: "Annual Staff Cost", irish: "€35,000–€45,000", anamrina: "€4,800–€7,800" },
                { item: "Employer PRSI (11.05%)", irish: "€3,800–€5,000", anamrina: "€0 — included" },
                { item: "Office Space & Equipment", irish: "€3,000–€6,000", anamrina: "€0 — included" },
                { item: "Recruitment Fee", irish: "€5,000–€10,000", anamrina: "€6,900 one-off" },
                { item: "Service & Management Fee", irish: "N/A", anamrina: "€3,600/year" },
                { item: "HR & Compliance Admin", irish: "Your time", anamrina: "Fully managed" },
              ].map((row, i) => (
                <div key={i} className="comparison-row" style={{ padding: "14px 32px", borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? C.warmWhite : C.white }}>
                  <span style={{ fontFamily: sans, fontSize: "0.84rem", fontWeight: 600, color: C.deep }}>{row.item}</span>
                  <span style={{ fontFamily: sans, fontSize: "0.84rem", color: C.textMid }}>{row.irish}</span>
                  <span style={{ fontFamily: sans, fontSize: "0.84rem", color: C.cyan, fontWeight: 700 }}>{row.anamrina}</span>
                </div>
              ))}
              <div className="comparison-row" style={{ padding: "18px 32px", background: C.cyanPale }}>
                <span style={{ fontFamily: sans, fontSize: "0.9rem", fontWeight: 800, color: C.deep }}>Estimated Annual Total</span>
                <span style={{ fontFamily: sans, fontSize: "0.9rem", fontWeight: 800, color: C.deep }}>€47,000–€66,000</span>
                <span style={{ fontFamily: sans, fontSize: "0.9rem", fontWeight: 800, color: C.cyan }}>€8,400–€18,300</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal style={{ marginTop: "40px", textAlign: "center" }}>
          <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.textMid, marginBottom: "20px" }}>Want to know what it would cost for your specific practice? Ger will give you a straight answer.</p>
          <Link href="/contact" className="btn-primary" style={{ fontSize: "0.9rem" }}>
            Talk to Ger <Arr />
          </Link>
        </ScrollReveal>
      </Section>
    </main>
  );
}
