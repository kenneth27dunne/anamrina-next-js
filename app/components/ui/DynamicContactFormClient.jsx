"use client";
import dynamic from "next/dynamic";

const DynamicContactForm = dynamic(() => import("./DynamicContactForm"), { ssr: false });

export default function DynamicContactFormClient(props) {
  return <DynamicContactForm {...props} />;
} 