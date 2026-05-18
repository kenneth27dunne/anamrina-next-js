import React from "react";

export default function MarketingEyebrow({ children, className = "", as: Tag = "p" }) {
  return (
    <Tag
      className={`text-sm font-semibold uppercase tracking-wider text-primary ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
