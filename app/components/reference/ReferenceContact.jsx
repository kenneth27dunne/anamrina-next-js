import { C, sans, serif } from "./constants";
import { Chk, Section, Tag } from "./Primitives";
import DynamicContactFormClient from "../ui/DynamicContactFormClient";
import ScrollReveal from "./ScrollReveal";

export default function ReferenceContact() {
  return (
    <main>
      <Section>
        <div className="contact-grid">
          <ScrollReveal variant="slideLeft">
            <div>
              <Tag>Get in Touch</Tag>
              <h2 style={{ fontFamily: serif, fontSize: "2rem", color: C.deep, marginBottom: "14px" }}>Talk to Ger Directly</h2>
              <p style={{ fontFamily: sans, fontSize: "0.92rem", color: C.textMid, lineHeight: 1.8, marginBottom: "32px" }}>
                Tell us a bit about your practice and what you&apos;re looking for. Ger will come back to you personally — no sales script, no pressure.
              </p>

              {[
                { icon: "✉️", label: "Email", value: "info@anamrinarecruitment.com" },
                { icon: "✉️", label: "Email", value: "ger@anamrina.com" },
                { icon: "📞", label: "Ireland", value: "+353 87 240 0364" },
                { icon: "📞", label: "India", value: "+091 89681 90404" },
                { icon: "📍", label: "India Office", value: "613–617, 6th Floor, Motiaz Royal Business Park, Zirakpur, Punjab" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: C.cyanPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: C.slate, marginBottom: "5px" }}>{c.label}</div>
                    <div style={{ fontFamily: sans, fontSize: "0.85rem", color: C.text }}>{c.value}</div>
                  </div>
                </div>
              ))}

              <div style={{ background: C.cyanPale, borderRadius: "10px", padding: "22px", marginTop: "24px" }}>
                <div style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 800, color: C.deep, marginBottom: "10px" }}>What to expect</div>
                {["A direct conversation with Ger — not a sales rep", "Honest advice on whether this works for your practice", "Clear numbers — no hidden fees"].map((t, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "center" }}>
                    <Chk />
                    <span style={{ fontFamily: sans, fontSize: "0.8rem", color: C.textMid }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="slideRight" delay={0.08}>
            <div style={{ background: C.white, border: `1px solid ${C.border}`, borderRadius: "16px", padding: "40px", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontFamily: sans, fontSize: "1.1rem", fontWeight: 800, color: C.deep, marginBottom: "26px" }}>Send Us a Message</h3>
              <DynamicContactFormClient variant="reference" Title={null} Description={null} />
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </main>
  );
}
