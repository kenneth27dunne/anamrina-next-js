import { C, sans, serif } from "./constants";

export function Arr() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function Chk() {
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: C.cyanPale,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="10" height="10" viewBox="0 0 12 12" aria-hidden>
        <path d="M2 6l3 3 5-5" stroke={C.cyan} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Tag({ children }) {
  return (
    <div
      style={{
        fontFamily: sans,
        fontSize: "0.7rem",
        fontWeight: 800,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: C.cyan,
        marginBottom: "12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <span style={{ width: "20px", height: "2px", background: C.cyan, display: "inline-block" }} />
      {children}
    </div>
  );
}

export function Section({ children, bg = C.warmWhite }) {
  return (
    <section style={{ padding: "84px 48px", background: bg }} className="section-pad">
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%", minWidth: 0 }}>{children}</div>
    </section>
  );
}

export const lbl = {
  display: "block",
  fontFamily: sans,
  fontSize: "0.7rem",
  fontWeight: 800,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: C.slate,
  marginBottom: "5px",
};
