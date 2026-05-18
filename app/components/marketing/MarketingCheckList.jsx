import React from "react";

export function MarketingCheckList({ children, className = "" }) {
  return <ul className={`list-none space-y-3 m-0 p-0 ${className}`.trim()}>{children}</ul>;
}

export function MarketingCheckListItem({ icon: Icon, children, className = "" }) {
  return (
    <li className={`flex gap-3 items-start ${className}`.trim()}>
      {Icon ? (
        <Icon className="h-5 w-5 shrink-0 text-primary mt-0.5" strokeWidth={2} aria-hidden />
      ) : null}
      <span className="text-gray-700">{children}</span>
    </li>
  );
}
