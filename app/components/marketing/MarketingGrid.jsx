import React from "react";

const colClass = {
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
};

export default function MarketingGrid({ columns = 2, children, className = "" }) {
  const cols = colClass[columns] ?? colClass[2];
  return (
    <div className={`grid gap-6 md:gap-8 ${cols} ${className}`.trim()}>{children}</div>
  );
}
