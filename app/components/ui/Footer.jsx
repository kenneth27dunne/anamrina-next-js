import Image from "next/image";
import Link from "next/link";
import whiteLogo from "../../assets/Full name gradient white_300x87.png";

const C = {
  deep: "#111C28",
  cyan: "#00B4D8",
};

const sans = `"Plus Jakarta Sans", "Segoe UI", system-ui, sans-serif`;

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/howItWorks" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Get Started",
    links: [
      { label: "Book a Call", href: "/contact" },
      { label: "Get a Quote", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@anamrinarecruitment.com", href: "mailto:info@anamrinarecruitment.com" },
      { label: "ger@anamrina.com", href: "mailto:ger@anamrina.com" },
      { label: "+353 87 240 0364", href: "tel:+353872400364" },
      { label: "Zirakpur, Punjab, India", href: null },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: C.deep, padding: "56px 48px 24px" }} className="section-pad">
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ marginBottom: "44px" }} className="footer-grid">
          <div>
            <div style={{ marginBottom: "14px" }}>
              <Image src={whiteLogo} alt="Anamrina Recruitment" width={150} height={34} style={{ height: "30px", width: "auto" }} />
            </div>
            <p style={{ fontFamily: sans, fontSize: "0.78rem", color: "#ffffff", lineHeight: 1.75, maxWidth: "240px" }}>
              Experienced Indian Accountants & Bookkeepers working remotely, backed by Irish management in India.
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase", color: C.cyan, marginBottom: "16px" }}>{col.title}</div>
              {col.links.map((link) =>
                link.href ? (
                  <Link key={link.label} href={link.href} className="footer-link">
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.label} style={{ color: "#ffffff", fontFamily: sans, fontSize: "0.8rem", marginBottom: "8px", display: "block" }}>
                    {link.label}
                  </span>
                )
              )}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "20px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", fontFamily: sans, fontSize: "0.68rem", color: "#ffffff" }}>
          <span>© {new Date().getFullYear()} Anamrina Recruitment Solutions Pvt Ltd. All rights reserved.</span>
          <span>Dublin, Ireland · Zirakpur, Punjab, India</span>
        </div>
      </div>
    </footer>
  );
}
