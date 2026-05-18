import React from "react";

export default function MarketingSection({
  children,
  className = "",
  contentClassName = "",
  flush = false,
}) {
  if (flush) {
    return <section className={className.trim() || undefined}>{children}</section>;
  }
  return (
    <section className={className.trim() || undefined}>
      <div className={`inner-wrapper ${contentClassName}`.trim()}>{children}</div>
    </section>
  );
}
