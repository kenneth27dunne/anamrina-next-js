"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail, IoIosPin } from "react-icons/io";


export default function ContactForm({ Title, Description }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Form Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSuccessMessage("Failed to send message. Try again later.");
    }
    
    setLoading(false);
  };

  return (
    <section className="">
      {
        Title && 
        <h2 className="section-title text-center mb-6">
          <ReactMarkdown>{Title}</ReactMarkdown>
        </h2>
      }
      { Description && <p className="section-description">{Description}</p> }
      <div className="grid md:grid-cols-2 gap-6 text-left rounded-lg p-6 border">
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
          <button
            type="submit"
            className="btn btn-primary mt-1"
            disabled={loading} >
            {loading ? "Sending..." : "Submit"}
          </button>
          {successMessage && (
            <p className="text-center text-green-600">{successMessage}</p>
          )}
        </form>

        {/* Right - Contact Info Cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:max-h-[460px]">
          {/* Location */}
          <div className="p-4 bg-blue-100 rounded-lg flex justify-around flex-col max-h-[230px]">
            <div className="rounded-full bg-primary text-5xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <IoIosPin />
            </div>
            <h4 className="font-bold mt-2 text-lg">Our Location</h4>
            <p className="text-gray-600 text-sm">
              1234 Talent Avenue, Suite 567, <br /> Cityville, CV 12345
            </p>
          </div>
          {/* Email */}
          <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
            <div className="rounded-full bg-primary text-6xl h-[73px] w-[73px] flex justify-center items-center text-white">
                <IoIosMail />
            </div>
            <h4 className="font-bold mt-2 text-lg">Email Us</h4>
            <p className="text-gray-600 text-sm">@AnamrinaRecruitment.com</p>
          </div>
          {/* Chat */}
          <div className="p-4 border rounded-lg flex justify-around flex-col max-h-[230px]">
            <div className="rounded-full bg-primary text-4xl pt-[5px] h-[73px] w-[73px] flex justify-center items-center text-white">
                <BsFillChatSquareTextFill />
            </div>
            <h4 className="font-bold mt-2 text-lg">Chat With Us</h4>
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
            <p className="text-gray-600 text-sm">02165465421315</p>
          </div>
        </div>
      </div>
    </section>
  );
}
