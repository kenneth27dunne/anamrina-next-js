"use client";
import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail, IoIosPin } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { trackContactForm } from "../GoogleAnalyticsAdvanced";
import { submitContactEmail } from "../../lib/submitContactEmail";
import { buildContactSubmitPayload } from "../../lib/contactFormClientGuards";
import ContactFormHoneypot from "./ContactFormHoneypot";


export default function ContactForm({ Title, Description, isApply = false }) {
  const formLoadedAt = useRef(Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    companyWebsite: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    const result = await submitContactEmail(
      buildContactSubmitPayload(formData, formLoadedAt.current)
    );
    setLoading(false);

    if (result.ok) {
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "", companyWebsite: "" });
      trackContactForm(isApply ? "job_application" : "contact");
    } else {
      setErrorMessage(result.error);
    }
  };

  return (
    <section className="">
      <div className="inner-wrapper">
        {
          Title && 
          <h2 className="section-title text-center mb-6">
            <ReactMarkdown>{Title}</ReactMarkdown>
          </h2>
        }
        { Description && <p className="section-description text-center mb-6">{Description}</p> }
        <div className={`grid ${isApply? "md:grid-cols-1": "md:grid-cols-2"} gap-6 text-left rounded-lg p-6 border bg-white`}>
          {/* Left - Contact Form */}
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-2 mt-[-10px]">
              <label className="font-semibold leading-10">First Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-2">
              <label className="font-semibold leading-10">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            </div>
            <div className="mb-2">
              <label className="font-semibold leading-10">Message</label>
              <textarea
                name="message"
                placeholder="Type Here"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md bg-gray-100 h-32"
              />
            </div>
            <ContactFormHoneypot
              value={formData.companyWebsite}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary mt-1"
              disabled={loading} >
              {loading ? "Sending..." : "Submit"}
            </button>
            {successMessage && (
              <p className="text-center text-primary">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-center text-red-600">{errorMessage}</p>
            )}
          </form>

          {/* Right - Contact Info Cards */}
          {
          isApply === false && 
          <div className="grid sm:grid-cols-2 gap-4 sm:max-h-[460px]">
            {/* Location */}
            <div className="p-4 bg-blue-100 rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-5xl h-[73px] w-[73px] flex justify-center items-center text-white">
                  <IoIosPin />
              </div>
              <h4 className="font-bold mt-2 text-lg">Our Location</h4>
              <p className="text-gray-600 text-sm">
              95 Millennium Business Park, Cappagh Road, Ballycoolin, Dublin 11, D11 YK25
              </p>
            </div>
            {/* Email */}
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-6xl h-[73px] w-[73px] flex justify-center items-center text-white">
                  <IoIosMail />
              </div>
              <h4 className="font-bold mt-2 text-lg">Email Us</h4>
              <p className="text-gray-600 text-sm">info@anamrinarecruitment.com</p>
            </div>
            {/* Chat */}
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-4xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <LuAlarmClock />
              </div>
              <h4 className="font-bold mt-2 text-lg">Opening Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon - Fri 09:00 AM - 05:00 PM
              </p>
            </div>
            {/* Call */}
            <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
              <div className="rounded-full bg-primary text-4xl  h-[73px] w-[73px] flex justify-center items-center text-white">
                  <FaPhone />
              </div>
              <h4 className="font-bold mt-2 text-lg">Call Us Now</h4>
              <p className="text-gray-600 text-sm">+353858239516</p>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  );
}
