import React from "react";
function InfoCard({ title, description, isActive, onClick, IconComponent }) {
  return (
    <div
      className={`info-card ${isActive ? "active" : ""} min-h-full`}
      onClick={onClick}
    >
      {
        IconComponent == null? 
        <div className={`info-card-icon ${isActive ? "bg-[url('/cog-checkmark.png')]" : "bg-[url('/cog-checkmark-white.png')]"}`} />: 
        <div className="info-card-icon">
          <IconComponent />
        </div>
      }
      <h4 className="info-card-title">{title}</h4>
      <div className="info-card-text">{description}</div>
    </div>
  );
}

export default InfoCard;
