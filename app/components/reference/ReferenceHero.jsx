"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { C, sans, serif } from "./constants";
import { Arr } from "./Primitives";

function CostRow({ label, value, highlight, fraction }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <span style={{ fontFamily: sans, fontSize: "0.8rem", color: highlight ? C.cyan : "rgba(255,255,255,0.5)" }}>{label}</span>
      <div style={{ fontFamily: serif, fontSize: "1.6rem", color: highlight ? C.cyan : "rgba(255,255,255,0.3)", marginTop: "4px" }}>
        {value}
        <span style={{ fontFamily: sans, fontSize: "0.68rem", color: "rgba(255,255,255,0.25)", marginLeft: "8px" }}>/year</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${fraction * 100}%`,
            background: highlight ? `linear-gradient(90deg, ${C.cyan}, ${C.cyanLight})` : "rgba(255,255,255,0.1)",
          }}
        />
      </div>
    </div>
  );
}

export default function ReferenceHero() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(155deg, ${C.deep} 0%, ${C.navy} 45%, ${C.navyMid} 100%)`,
        paddingBottom: "88px",
        paddingLeft: "48px",
        paddingRight: "48px",
        position: "relative",
        overflow: "hidden",
      }}
      className="hero-pad hero-over-nav"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.7) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.08), transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "10%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,180,216,0.05), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-grid">
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,180,216,0.12)",
              border: "1px solid rgba(0,180,216,0.2)",
              borderRadius: "20px",
              padding: "6px 16px 6px 8px",
              marginBottom: "20px",
              animation: animated ? "fadeUp 0.6s ease 0.1s both" : "none",
            }}
          >
            <span style={{ fontSize: "0.75rem" }}>🇮🇪</span>
            <span style={{ fontFamily: sans, fontSize: "0.73rem", fontWeight: 700, color: C.cyan }}>Proud Sponsors of ProfitPro & OmniPro 2026</span>
            <span style={{ fontSize: "0.75rem" }}>🇮🇳</span>
          </div>

          <h1
            style={{
              fontFamily: serif,
              fontSize: "3rem",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: "22px",
              animation: animated ? "fadeUp 0.7s ease 0.2s both" : "none",
            }}
            className="hero-h1"
          >
            Cut Your Staffing Costs{" "}
            <span style={{ color: C.cyan, position: "relative" }}>
              By 60% or More
              <svg style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", opacity: 0.4 }} viewBox="0 0 200 8" preserveAspectRatio="none" height="6" aria-hidden>
                <path d="M0 6 Q50 1 100 5 Q150 9 200 4" stroke={C.cyan} strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h1>

          <p
            style={{
              fontFamily: sans,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.8,
              maxWidth: "490px",
              marginBottom: "36px",
              animation: animated ? "fadeUp 0.7s ease 0.3s both" : "none",
            }}
          >
            I&apos;ve been running my own Dublin practice since 1990 with 10 Indian staff. Now I&apos;m making the same model available to practices like yours — qualified accountants and bookkeepers at Indian salary rates, fully managed, fully compliant.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: animated ? "fadeUp 0.7s ease 0.4s both" : "none" }}>
            <Link href="/contact" className="btn-primary">
              Talk to Ger <Arr />
            </Link>
            <Link href="/howItWorks" className="btn-ghost">
              See How It Works
            </Link>
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: "18px",
            padding: "32px",
            backdropFilter: "blur(10px)",
            animation: animated ? "fadeUp 0.8s ease 0.35s both" : "none",
          }}
        >
          <div style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>The Real Numbers</div>

          <CostRow label="🇮🇪 Irish-based hire (salary + PRSI + overheads)" value="€40,000+" fraction={1} />
          <CostRow label="🇮🇳 Via Anamrina (all-in Yearly cost)" value="From €6000" highlight fraction={0.25} />

          <div style={{ background: "rgba(0,180,216,0.1)", borderRadius: "12px", padding: "20px", textAlign: "center", border: "1px solid rgba(0,180,216,0.18)", marginBottom: "20px" }}>
            <div style={{ fontFamily: serif, fontSize: "2.2rem", color: C.cyan, lineHeight: 1 }}>Save 60%+</div>
            <div style={{ fontFamily: sans, fontSize: "0.73rem", color: "rgba(255,255,255,0.4)", fontWeight: 600, marginTop: "4px" }}>per staff member, per year</div>
          </div>

          <div style={{ fontSize: "0.72rem", fontFamily: sans, color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
            Candidate salary varies by experience. + €300/mo service fee covers everything.
            <br />
            One-time placement fee: €6,900, spread over 3 months.
          </div>
        </div>
      </div>
    </div>
  );
}
