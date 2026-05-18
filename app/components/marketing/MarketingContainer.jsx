import React from "react";

export default function MarketingContainer({ children, className = "" }) {
  return <div className={`container ${className}`.trim()}>{children}</div>;
}
